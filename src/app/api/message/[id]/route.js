import { verifyToken } from '@/B_middleware/JwtToken';
import { sendMail } from '@/B_middleware/SendEmail';
import { VerifyAdmin } from '@/B_middleware/VerifyAdmin';
import db from '@/DB/database'

export const GET = async (request, { params }) => {
    try {
        let msgCommand = `select * from messages where id = ${params?.id} `

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        // get message
        const msgPromise = await new Promise((resolve, reject) => {
            db.query(msgCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });
        return Response.json(msgPromise.result[0], { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}

export const POST = async (request, { params }) => {
    try {
        const { message } = await request.json();

        if (!message || !params?.id) {
            return Response.json({ error: 'enter all valid information' }, { status: 400 })
        }

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        let findmsgCommand = `select * from messages where id = ${params?.id} `
        // get message
        const msgPromise = await new Promise((resolve, reject) => {
            db.query(findmsgCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        const { id, name, email, reply_msg } = msgPromise.result[0];

        if (!id || !name || !email) {
            return Response.json({ error: 'contact person not found' }, { status: 400 })
        }

        if (reply_msg) {
            return Response.json({ error: 'You already send a reply message' }, { status: 400 })
        }

        const mailRes = await sendMail({ email, message, name });

        if (!mailRes) {
            return Response.json({ error: 'Email send failed, try again' }, { status: 400 })
        }

        let setReplysqlCmd = `update messages set 
                        reply_msg = ?,
                        isNew = false,
                        reply_date = ? where id = ${id}`

        const updatePromise = await new Promise((resolve, reject) => {
            db.query(setReplysqlCmd, [message, new Date()], (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'reply email send successsfully' }, { status: 200 })

    } catch (err) {
        console.log(err)
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}

export const PUT = async (request, { params }) => {
    try {
        if (!params?.id) {
            return Response.json({ error: 'enter valid information' }, { status: 400 })
        }
        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        let setsqlCmd = `update messages set 
                        isNew = ?
                        where id = ${params?.id}`;

        const updatePromise = await new Promise((resolve, reject) => {
            db.query(setsqlCmd, [false], (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'update successsfully' }, { status: 200 })

    } catch (err) {
        console.log(err)
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}