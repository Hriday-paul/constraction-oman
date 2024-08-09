import { verifyToken } from '@/B_middleware/JwtToken';
import db from '@/DB/database'
import bcrypt from 'bcrypt'

export const PUT = async (request) => {
    try {
        const { currentPassword, currentUsername, updatePassword } = await request.json();

        if (!currentPassword || !currentUsername || !updatePassword) {
            return Response.json({ error: 'enter all valid information' }, { status: 400 })
        }

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

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

        if (adminFindPromise.result[0]?.user_name !== currentUsername) {
            return Response.json({ error: 'Invalid user name' }, { status: 405 });
        }

        const isPasswordMatch = await bcrypt.compare(currentPassword, adminFindPromise.result[0]?.password);

        if (!isPasswordMatch) {
            return Response.json({ error: 'Invalid current password' }, { status: 405 });
        }

        const hashedPassword = await bcrypt.hash(updatePassword, 15);

        const updatedData = [hashedPassword];

        let sqlCmd = `update admin set 
                        password = ?
                        where user_name = '${user_name}'`

        const updatePromise = await new Promise((resolve, reject) => {
            db.query(sqlCmd, updatedData, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'password update successfully' }, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}