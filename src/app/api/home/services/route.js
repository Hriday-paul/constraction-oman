import db from '@/DB/database'

export const GET = async () => {
    try {
        // get all services
        const servicesCommand = 'select * from services'
        const servicesPromise = await new Promise((resolve, reject) => {
            db.query(servicesCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' });
                }
                resolve({ result })
            })
        });
        return Response.json(servicesPromise.result, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}