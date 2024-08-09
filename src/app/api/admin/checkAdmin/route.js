import jwt from 'jsonwebtoken'
import db from '@/DB/database'

export const GET = async (request) => {
    try {
        const searchParams = request.nextUrl.searchParams;
        const token = searchParams.get('token');

        if (!token || token == undefined || token == 'undefined') {
            request.cookies.delete('token')
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }

        const { user_name } = jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decode) => {
            if (err) {
                return Response.json({ error: 'session time expired' }, { status: 401 })
            }
            return decode;
        })

        let findCommand = `SELECT * FROM admin
        where user_name = '${user_name}'`

        // get chairmen info
        const adminFindPromise = await new Promise((resolve, reject) => {
            db.query(findCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        if (adminFindPromise.result.length < 0) {
            return Response.json({ error: 'Invalid credential' }, { status: 401 });
        }

        if (adminFindPromise.result[0]?.user_name !== user_name) {
            return Response.json({ error: 'Invalid credential' }, { status: 401 });
        }

        return Response.json({ message: 'admin check success' }, { status: 200 });

    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
};