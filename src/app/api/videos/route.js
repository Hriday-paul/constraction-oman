import { verifyToken } from '@/B_middleware/JwtToken';
import { VerifyAdmin } from '@/B_middleware/VerifyAdmin';
import db from '@/DB/database'


export const GET = async (request) => {
    try {
        let projectsCommand = `SELECT * from videos order by id desc`

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

export const POST = async (request) => {
    try {
        const { title, details, src } = await request.json();

        if (!title || !details  || !src) {
            return Response.json({ error: 'enter all valid information' }, { status: 400 })
        }

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        const newData = [title, details, src];

        let sqlCmd = `insert into videos (title, details, src) values(?, ?, ?) `

        // update manager
        const updatePromise = await new Promise((resolve, reject) => {
            db.query(sqlCmd, newData, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'video added successfully' }, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}


export const PUT = async (request) => {
    try {
        const { title, details, src, id } = await request.json();

        if (!title || !details  || !src || !id) {
            return Response.json({ error: 'enter all valid information' }, { status: 400 })
        }

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        const updatedData = [title, details, src];

        let sqlCmd = `update videos set 
                        title = ?,
                        details = ?,
                        src = ? where id = ${id} `

        // update manager
        const updatePromise = await new Promise((resolve, reject) => {
            db.query(sqlCmd, updatedData, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'video update successfully' }, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}

export const DELETE = async (request) => {
    try {
        const searchParams = request.nextUrl.searchParams;
        const videoId = searchParams.get('id');

        if(!videoId){
            return Response.json({ error: 'video id not found' }, { status: 400 })
        }

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        let sqlCmd = `delete from videos where id = ?`

        // delete people
        const deletePromise = await new Promise((resolve, reject) => {
            db.query(sqlCmd, [videoId], (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'video delete successfully' }, { status: 200 })
    } catch (err) {
        console.log(err)
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}
