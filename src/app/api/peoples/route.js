import db from '@/DB/database'
import { join } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import { verifyToken } from '@/B_middleware/JwtToken'
import { VerifyAdmin } from '@/B_middleware/VerifyAdmin'


export const GET = async (request) => {
    try {
        let directorsCmd = `SELECT * from directors`

        // get all directors
        const directorsPromise = await new Promise((resolve, reject) => {
            db.query(directorsCmd, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        // get all project managers
        let pManagersCmd = `SELECT * from peoples`
        const pManagersPromise = await new Promise((resolve, reject) => {
            db.query(pManagersCmd, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });



        return Response.json({ directors: directorsPromise.result, pManagers: pManagersPromise.result }, { status: 200 })
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


export const POST = async (request) => {
    try {
        const data = await request.formData();
        const name = data.get('name');
        const position = data.get('position');
        const facebook = data.get('facebook');
        const instragram = data.get('instagram');
        const linkedin = data.get('linkedin');
        const file = data.get('image');

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        const newData = [name, position, facebook || '', instragram || '', linkedin || ''];

        let insertcmd = 'insert into directors(name, position, facebook, instagram, linkedin) values(?, ?, ?, ?, ?)';

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

            insertcmd = 'insert into peoples(name, position, facebook, instagram, linkedin, image) values(?, ?, ?, ?, ?, ?)';
            newData.push('/peoples/' + fileName);
        }

        // add manager
        const addPromise = await new Promise((resolve, reject) => {
            db.query(insertcmd, newData, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'add people successfully' }, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}



export const PUT = async (request) => {
    try {
        const data = await request.formData();
        const name = data.get('name');
        const position = data.get('position');
        const facebook = data.get('facebook');
        const instragram = data.get('instagram');
        const linkedin = data.get('linkedin');
        const file = data.get('image');
        const peopleId = data.get('id');

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        const updatedData = [name, position, facebook || '', instragram || '', linkedin || ''];

        let sqlCmd = `update peoples set 
                        name = ?,
                        position = ?,
                        facebook = ?,
                        instagram = ?,
                        linkedin = ?`

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

        sqlCmd += ` where id = ${peopleId}`

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

        return Response.json({ message: 'people update successfully' }, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}

export const DELETE = async (request) => {
    try {
        const searchParams = request.nextUrl.searchParams;
        const peopleId = searchParams.get('id');

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        let sqlCmd = `delete from peoples where id = ?`

        // delete people
        const deletePromise = await new Promise((resolve, reject) => {
            db.query(sqlCmd, [peopleId], (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'people delete successfully' }, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}

