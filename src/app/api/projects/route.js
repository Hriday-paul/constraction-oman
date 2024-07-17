import db from '@/DB/database'

export const GET = async (request) => {
    try {
        const searchParams = request.nextUrl.searchParams;
        let projectsCommand = `select projects.id, projects.name, projects.details, projects.start_date, projects.end_date, projects.location, project_types.service_name as service_name , p_images.images, peoples.position as project_manager_position, peoples.name as project_manager_name, peoples.image as manager_image, categories.type_name as category, categories.icon_image as category_icon
        from projects 
        left JOIN project_types
            ON projects.project_type_id = project_types.id
	        left join (SELECT GROUP_CONCAT(project_images.image) as images, project_id from project_images group by project_id) as p_images
            on projects.id = p_images.project_id
    	        LEFT JOIN peoples
                ON projects.project_manager = peoples.id
        	        left JOIN categories
                    on projects.category_id = categories.id
                    where 1 = 1 `

        if (searchParams) {
            const query = searchParams.get('type');
            const category = searchParams.get('category');
            const limit = searchParams.get('limit');
            if (query == 'best') {
                projectsCommand += 'and is_best_projects = true'
            }
            if (category) {
                projectsCommand += ` and categories.id = ${category}`
            }
            if (limit) {
                projectsCommand += ` limit ${parseInt(limit)}`
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