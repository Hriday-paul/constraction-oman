import db from '@/DB/database'


export const GET = async () => {
    try {
        let directorsCommand = 'select * from directors';

        // get projects
        const directorsPromise = await new Promise((resolve, reject) => {
            db.query(directorsCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });
        return Response.json(directorsPromise.result, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}