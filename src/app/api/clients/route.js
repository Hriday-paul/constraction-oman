import db from '@/DB/database'

export const GET = async () => {
    try {
        let clientsCommand = 'select * from clients';

        // get projects
        const clientsPromise = await new Promise((resolve, reject) => {
            db.query(clientsCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });
        return Response.json(clientsPromise.result, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}