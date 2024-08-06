import { verifyToken } from '@/B_middleware/JwtToken';
import { VerifyAdmin } from '@/B_middleware/VerifyAdmin';
import db from '@/DB/database'

export const GET = async (request) => {
    try {
        let sqlCommand = `SELECT * from messages order by date_time desc`

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);
        
        // get messages
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



export const POST = async (request) => {
    try {
        const { name, email, phone, message, company } = await request.json();

        if (!name || !email || !phone || !message) {
            return Response.json({ error: 'please fill, all required input' }, { status: 400 })
        }

        const newData = [name, email, phone, message, company || '', true];

        const insertCmd = 'insert into messages(name, email, phone, message, company, isNew) values(?, ?, ?, ?, ?, ?)';
        // add message
        const addPromise = await new Promise((resolve, reject) => {
            db.query(insertCmd, newData, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'Message send successsfully' }, { status: 200 })

    } catch (err) {
        console.log(err)
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}