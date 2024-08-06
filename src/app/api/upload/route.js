import { join } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import { verifyToken } from '@/B_middleware/JwtToken';
import { VerifyAdmin } from '@/B_middleware/VerifyAdmin';
import db from '@/DB/database'

const publicDir = join(process.cwd(), 'public', 'projects');
const ensureDir = async (dirPath) => {
    try {
        await mkdir(dirPath, { recursive: true });
    } catch (err) {
        console.error(`Error creating directory ${dirPath}:`, err);
        return Response.json({ error: 'file upload failed, try again' }, { status: 500 })
    }
};


export const GET = async (request) => {
    try {
        const searchParams = request.nextUrl.searchParams;

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        let DraftCmd = `select * from draft_images order by id desc`

        if (searchParams) {
            const limit = searchParams.get('limit');

            if (limit) {
                DraftCmd += ` limit ${parseInt(limit - 10)}, ${parseInt(limit)}`
            }
        }

        const getDraftPromise = await new Promise((resolve, reject) => {
            db.query(DraftCmd, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json(getDraftPromise?.result, { status: 200 })

    } catch (err) {
        console.log(err)
        return new Response(JSON.stringify({ error: 'something went wrong, try again' }), { status: 400 });
    }
}


export const POST = async (request) => {
    try {
        const data = await request.formData();
        const file = data.get('image');

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);


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

            const storeDraftCmd = `insert into draft_images (image) values(?)`

            const addDraftPromise = await new Promise((resolve, reject) => {
                db.query(storeDraftCmd, ['/projects/' + fileName], (err, result) => {
                    if (err) {
                        console.log(err);
                        reject({ error: 'Internal Server Error' })
                    }
                    resolve({ result })
                })
            });

            return Response.json({ message: 'file upload successfully', url: '/projects/' + fileName }, { status: 200 })
        }

        return new Response(JSON.stringify({ error: 'something went wrong, try again' }), { status: 400 });

    } catch (err) {
        console.log(err)
        return new Response(JSON.stringify({ error: 'something went wrong, try again' }), { status: 400 });
    }
}