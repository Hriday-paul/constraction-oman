

import db from '@/DB/database'

export const GET = async (request) => {
    try {
        const searchParams = request.nextUrl.searchParams;
        let directorCommand = `SELECT * FROM directors
                                where 1 = 1`

        if (searchParams) {
            const position = searchParams.get('position');
            
            if (position) {
                directorCommand += ` and position = '${position}'`
            }
        }

        // get projects
        const projectsPromise = await new Promise((resolve, reject) => {
            db.query(directorCommand, (err, result) => {
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