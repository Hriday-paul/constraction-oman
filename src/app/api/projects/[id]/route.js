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