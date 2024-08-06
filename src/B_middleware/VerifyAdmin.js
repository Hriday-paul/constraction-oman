import db from '@/DB/database';

export async function VerifyAdmin(user_name) {

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
    return;
}
