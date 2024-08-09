import db from '@/DB/database'
import { join } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import { verifyToken } from '@/B_middleware/JwtToken';
import { VerifyAdmin } from '@/B_middleware/VerifyAdmin';

export const GET = async () => {
    try {
        let clientsCommand = 'select * from clients';

        // get projects
        const clientsPromise = await new Promise((resolve, reject) => {
            db.query(clientsCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });
        return Response.json(clientsPromise.result, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
};

const publicDir = join(process.cwd(), 'public', 'clients');
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
        const website_url = data.get('website_url');
        const file = data.get('image');

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        const newData = [name, website_url];

        let insertcmd = 'insert into clients(name, website_url) values(?, ?)';

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

            insertcmd = 'insert into clients(name, website_url, image) values(?, ?, ?)';
            newData.push('/clients/' + fileName);
        }

        // add client
        const addPromise = await new Promise((resolve, reject) => {
            db.query(insertcmd, newData, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'add client successfully' }, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}


export const PUT = async (request) => {
    try {
        const data = await request.formData();
        const name = data.get('name');
        const website_url = data.get('website_url');
        const clientId = data.get('id');
        const file = data.get('image');

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        const newData = [name, website_url];

        let updatecmd = 'update clients set name = ?, website_url = ?';

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

            updatecmd += ', image = ?';
            newData.push('/clients/' + fileName);
        }

        updatecmd += ` where id = ${clientId}`

        // add client
        const addPromise = await new Promise((resolve, reject) => {
            db.query(updatecmd, newData, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'client update successfully' }, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}


export const DELETE = async (request) => {
    try {
        const searchParams = request.nextUrl.searchParams;
        const clientId = searchParams.get('id');

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        let sqlCmd = `delete from clients where id = ?`

        // delete people
        const deletePromise = await new Promise((resolve, reject) => {
            db.query(sqlCmd, [clientId], (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'client delete successfully' }, { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}

