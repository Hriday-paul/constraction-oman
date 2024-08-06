import db from '@/DB/database'
import { join } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import { verifyToken } from '@/B_middleware/JwtToken';
import { VerifyAdmin } from '@/B_middleware/VerifyAdmin';

export const GET = async (request) => {
    try {
        const searchParams = request.nextUrl.searchParams;
        let projectsCommand = `SELECT * from project_types where 1 = 1 `

        if (searchParams) {
            const category = searchParams.get('category');
            if (category) {
                projectsCommand += ` and category_id = ${category}`
            }
        }

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


const publicDir = join(process.cwd(), 'public', 'sector');
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
        const service_name = data.get('name');
        const category = data.get('category');
        const file = data.get('image');

        if (!service_name || !category) {
            return Response.json({ error: 'enter all valid information' }, { status: 400 })
        }

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        const newData = [service_name, category];

        let insertcmd = 'insert into project_types(service_name, category_id) values(?, ?)';

        if (!file || file == null || file == 'null') {
            return Response.json({ error: 'file not found' }, { status: 400 })
        }

        if (file && file.size > 0) {

            // Validate file type
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (!validTypes.includes(file.type)) {
                return new Response(JSON.stringify({ error: 'Invalid file type. Only JPEG, PNG, and GIF are allowed.' }), { status: 400 });
            }

            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Ensure the 'peoples' directory exists within 'public'
            await ensureDir(publicDir);

            // Construct the file path
            const fileName = Date.now() + '-' + file.name;
            const filePath = join(publicDir, fileName);

            // Write file to the public directory
            await writeFile(filePath, buffer);

            insertcmd = 'insert into project_types(service_name, category_id, icon) values(?, ?, ?)';
            newData.push('/sector/' + fileName);
        }

        // add sector
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
        const service_name = data.get('name');
        const category = data.get('category');
        const file = data.get('image');
        const sectorId = data.get('id');

        if (!service_name || !category) {
            return Response.json({ error: 'enter all valid information' }, { status: 400 })
        }

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        const updatedData = [service_name, category];

        let sqlCmd = `update project_types set 
                        service_name = ?,
                        category_id = ?`

        if (file && file.size > 0) {

            // Validate file type
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (!validTypes.includes(file.type)) {
                return new Response(JSON.stringify({ error: 'Invalid file type. Only JPEG, PNG, and GIF are allowed.' }), { status: 400 });
            }

            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Ensure the 'peoples' directory exists within 'public'
            await ensureDir(publicDir);

            // Construct the file path
            const fileName = Date.now() + '-' + file.name;
            const filePath = join(publicDir, fileName);

            // Write file to the public directory
            await writeFile(filePath, buffer);

            sqlCmd += `, icon = ?`
            updatedData.push('/sector/' + fileName);
        }

        sqlCmd += ` where id = ${sectorId}`

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
        const sectorId = searchParams.get('id');

        if(!sectorId){
            return Response.json({ error: 'sector id not found' }, { status: 400 })
        }

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        let sqlCmd = `delete from project_types where id = ?`

        // delete people
        const deletePromise = await new Promise((resolve, reject) => {
            db.query(sqlCmd, [sectorId], (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'sector delete successfully' }, { status: 200 })
    } catch (err) {
        console.log(err)
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}
