import { verifyToken } from '@/B_middleware/JwtToken';
import { VerifyAdmin } from '@/B_middleware/VerifyAdmin';
import db from '@/DB/database'

export const GET = async (request) => {
    try {
        const searchParams = request.nextUrl.searchParams;
        let projectsCommand = `select projects.id, projects.name, projects.details, projects.project_type_id, projects.project_manager, projects.category_id, projects.is_best_projects, projects.client_id, projects.start_date, projects.end_date, projects.location, projects.budget, project_types.service_name as service_name, p_images.images, peoples.position as project_manager_position, peoples.name as project_manager_name, peoples.image as manager_image, categories.type_name as category, categories.icon_image as category_icon, clients.name as client_name
        from projects 
        left JOIN project_types
            ON projects.project_type_id = project_types.id
	        left join (SELECT GROUP_CONCAT(project_images.image) as images, project_id from project_images group by project_id) as p_images
            on projects.id = p_images.project_id
    	        LEFT JOIN peoples
                ON projects.project_manager = peoples.id
        	        left JOIN categories
                    on projects.category_id = categories.id
                        left JOIN clients
                         on projects.client_id = clients.id
                    where 1 = 1 `

        if (searchParams) {
            const query = searchParams.get('type');
            const category = searchParams.get('category');
            const sector = searchParams.get('sector');
            const limit = searchParams.get('limit');
            const sort = searchParams.get('sortByDate');
            if (query == 'best') {
                projectsCommand += 'and is_best_projects = true'
            }
            if (category) {
                projectsCommand += ` and categories.id = ${category}`
            }
            if (sector) {
                projectsCommand += ` and project_types.id = ${sector}`
            }
            if (limit) {
                projectsCommand += ` limit ${parseInt(limit)}`
            }
            if (sort && sort == 1) {
                projectsCommand += ` order by projects.end_date`
            }
        }

        // get projects
        const projectsPromise = await new Promise((resolve, reject) => {
            db.query(projectsCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });
        return Response.json(projectsPromise.result, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}

export const POST = async (request) => {
    try {
        const data = await request.formData();
        const name = data.get('name');
        const category = data.get('category');
        const client = data.get('client');
        const location = data.get('location');
        const budget = data.get('budget');
        const startDate = data.get('startDate');
        const completeDate = data.get('completeDate');
        const details = data.get('details');
        const images = data.get('images');
        const sector = data.get('sector');
        const pmanager = data.get('pManager');
        const isBest = data.get('isBest');

        if (!name || !category || !client || !location || !budget || !startDate || !completeDate || !details || !images || !sector || !pmanager) {
            return Response.json({ error: 'enter all valid information' }, { status: 400 })
        }

        if (images.length <= 0) {
            return Response.json({ error: 'send minimum 1 project image' }, { status: 400 })
        }

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);


        const newData = [name, sector, details, startDate, completeDate, location, pmanager, category, isBest || false, budget, client];

        let projectInsertcmd = 'insert into projects(name, project_type_id, details, start_date, end_date, location, project_manager, category_id, is_best_projects, budget, client_id) values(?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?)';

        const addProjectPromise = await new Promise((resolve, reject) => {
            db.query(projectInsertcmd, newData, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        const projectId = addProjectPromise.result.insertId;

        const imgAry = JSON.parse(images);

        let insertImgcmd = 'insert into project_images(project_id, image) values ?';

        const insertedImgData = imgAry.map(img => [projectId, img]);

        const addImagePromise = await new Promise((resolve, reject) => {
            db.query(insertImgcmd, [insertedImgData], (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'add project successfully' }, { status: 200 });

    } catch (err) {
        console.log(err)
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}