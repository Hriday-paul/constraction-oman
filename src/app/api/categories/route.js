import db from '@/DB/database'

export const GET = async () => {
    try {
        let categoriesCommand = 'select * from categories';

        // get categories
        const categoriesPromise = await new Promise((resolve, reject) => {
            db.query(categoriesCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });
        return Response.json(categoriesPromise.result, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}