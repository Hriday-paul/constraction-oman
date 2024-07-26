import db from '@/DB/database'

export const GET = async (request) => {
    try {
        let directorsCmd = `SELECT * from directors`
        
        // get all directors
        const directorsPromise = await new Promise((resolve, reject) => {
            db.query(directorsCmd, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        // get all project managers
        let pManagersCmd = `SELECT * from peoples`
        const pManagersPromise = await new Promise((resolve, reject) => {
            db.query(pManagersCmd, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        

        return Response.json({directors : directorsPromise.result, pManagers : pManagersPromise.result}, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}


// SELECT * from project_types
//where category_id = 1;