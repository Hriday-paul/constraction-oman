import db from '@/DB/database'
import { join } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import { verifyToken } from '@/B_middleware/JwtToken'
import { VerifyAdmin } from '@/B_middleware/VerifyAdmin'


export const GET = async () => {
    try {
        let chairmanCommand = `SELECT * FROM directors
                                where position = 'chairman'`

        // get chairmen info
        const projectsPromise = await new Promise((resolve, reject) => {
            db.query(chairmanCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });
        return Response.json(projectsPromise.result[0], { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}


const publicDir = join(process.cwd(), 'public', 'peoples');
const ensureDir = async (dirPath) => {
    try {
        await mkdir(dirPath, { recursive: true });
    } catch (err) {
        console.error(`Error creating directory ${dirPath}:`, err);
        return Response.json({ error: 'file upload failed, try again' }, { status: 500 })
    }
};

const adminLoginPath = '/xyz/admin/login'

export const PUT = async (request) => {
    try {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const phone = data.get('phone');
        const message = data.get('message');
        const file = data.get('image');

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        const updatedData = [name, email, phone, message];
        let sqlCmd = `update directors set 
                        name = ?,
                        email = ?,
                        phone = ?,
                        message = ?`

        if (file && file.size > 0) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Ensure the 'peoples' directory exists within 'public'
            await ensureDir(publicDir);

            // Construct the file path
            const fileName = Date.now() + '-' + file.name;
            const filePath = join(publicDir, fileName);

            // Write file to the public directory
            await writeFile(filePath, buffer);

            sqlCmd += `, image = ?`
            updatedData.push('/peoples/' + fileName);
        }

        sqlCmd += " where position = 'chairman' "
        await new Promise((resolve, reject) => {
            db.query(sqlCmd, updatedData, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'update successfully' }, { status: 200 })
    } catch (err) {
        console.log(err)
        return Response.json({ error: 'something went wrong, try again' }, { status: 500 })
    }
}
