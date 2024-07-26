import db from '@/DB/database'

export const GET = async (request) => {
    try {
        const searchParams = request.nextUrl.searchParams;
        let projectsCommand = `SELECT * from project_types where 1 = 1 `

        if (searchParams) {
            const category = searchParams.get('category');
            if (category) {
                projectsCommand += ` and category_id = ${category}`
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


// SELECT * from project_types
//where category_id = 1;