
import { verifyToken } from '@/B_middleware/JwtToken';
import { VerifyAdmin } from '@/B_middleware/VerifyAdmin';
import db from '@/DB/database'

export const GET = async (request) => {
    try {
        let projectsCommand = `SELECT * FROM contact `

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
        return Response.json(projectsPromise.result[0], { status: 200 })
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}

export const PUT = async (request, { params }) => {
    try {
        const data = await request.formData();
        const country = data.get('country');
        const address = data.get('address');
        const lat = data.get('lat');
        const longi = data.get('longi');
        const post_code = data.get('post_code');
        const toll_free = data.get('toll_free');
        const telephone = data.get('telephone');
        const fax = data.get('fax');
        const email = data.get('email');
        const head_office = data.get('head_office');
        const company = data.get('company');

        if (!country || !address || !lat || !longi || !post_code || !toll_free || !telephone || !fax || !email || !head_office || !company) {
            return Response.json({ error: 'enter all valid information' }, { status: 400 })
        }

        let cookie = request.cookies.get('token');
        if (!cookie) {
            return Response.json({ error: 'unothorized access' }, { status: 401 })
        }
        const { user_name } = await verifyToken(cookie?.value);

        await VerifyAdmin(user_name);

        const newData = [country, address, lat, longi, post_code, toll_free, telephone, fax, email, head_office, company];

        let contactUpdatecmd = `update contact set country = ?, address = ?, lat = ?, longi = ?, post_code = ?, toll_free = ?, telephone = ?, fax = ?, email = ?, head_office = ?, company = ? where id = 1`;

        const updateProjectPromise = await new Promise((resolve, reject) => {
            db.query(contactUpdatecmd, newData, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        return Response.json({ message: 'update successfully' }, { status: 200 });

    } catch (err) {
        console.log(err)
        return Response.json({ error: 'something went wrong, try again' }, { status: 400 })
    }
}