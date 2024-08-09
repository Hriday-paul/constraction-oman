
import db from '@/DB/database'

export const GET = async (request) => {
    try {
        let sqlCommand = `SELECT * from home_sliders`

        // get projects
        const projectsPromise = await new Promise((resolve, reject) => {
            db.query(sqlCommand, (err, result) => {
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