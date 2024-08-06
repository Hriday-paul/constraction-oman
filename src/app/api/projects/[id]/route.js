import { verifyToken } from '@/B_middleware/JwtToken';
import { VerifyAdmin } from '@/B_middleware/VerifyAdmin';
import db from '@/DB/database'

export const GET = async (request, { params }) => {
    try {
        let projectsCommand = `select projects.id, projects.name, projects.details, projects.start_date, projects.end_date, projects.location, projects.budget, project_types.service_name as service_name , p_images.images, peoples.position as project_manager_position, peoples.name as project_manager_name, peoples.image as manager_image, categories.type_name as category, categories.icon_image as category_icon, clients.image as client_image, clients.name as client_name, clients.website_url as client_website
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
                    where projects.id = ${params?.id} `

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

export const PUT = async (request, { params }) => {
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
        const sector = data.get('sector');
        const pmanager = data.get('pManager');
        const isBest = data.get('isBest');
        const id = params?.id;

        if (!name || !category || !client || !location || !budget || !startDate || !completeDate || !details || !sector || !pmanager) {
            return Response.json({ error: 'enter all valid information' }, { status: 400 })
        }

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);


        const newData = [name, sector, details, startDate, completeDate, location, pmanager, category, isBest || false, budget, client];

        let projectUpdatecmd = `update projects set name = ?, project_type_id = ?, details = ?, start_date = ?, end_date = ?, location = ?, project_manager = ?, category_id = ?, is_best_projects = ?, budget = ?, client_id = ? where id = ${id}`;

        const updateProjectPromise = await new Promise((resolve, reject) => {
            db.query(projectUpdatecmd, newData, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'project update successfully' }, { status: 200 });

    } catch (err) {
        console.log(err)
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        const id = params?.id

        if (!id) {
            return Response.json({ error: 'project id not found' }, { status: 400 })
        }

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        let sqlCmd = `delete from projects where id = ?`

        // delete people
        const deletePromise = await new Promise((resolve, reject) => {
            db.query(sqlCmd, [id], (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'sector delete successfully' }, { status: 200 })
    } catch (err) {
        console.log(err)
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}