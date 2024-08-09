import bcrypt from 'bcrypt'
import db from '@/DB/database'
import { CreatJwtToken } from '@/B_middleware/JwtToken';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
    try {
        const body = await request.json();
        if (!body.user_name || !body.password) {
            return Response.json({ error: 'Filled all valid input' }, { status: 401 });
        }

        let adminFindCommand = `SELECT * FROM admin where user_name = '${body.user_name}'`

        // get projects
        const adminResPromise = await new Promise((resolve, reject) => {
            db.query(adminFindCommand, (err, result) => {
                if (err) {
                    console.log(err);
                    reject({ error: 'Internal Server Error' })
                }
                resolve({ result })
            })
        });

        if (adminResPromise.result.length < 1) {
            return Response.json({ error: 'Invalid credential' }, { status: 401 });
        }
        if (!adminResPromise.result[0]) {
            return Response.json({ error: 'Invalid credential' }, { status: 401 });
        }

        const isPasswordMatch = await bcrypt.compare(body.password, adminResPromise.result[0].password);

        if (!isPasswordMatch) {
            return Response.json({ error: 'Invalid credential' }, { status: 401 });
        }

        const token = await CreatJwtToken({ user_name: body.user_name }); 

        const response = NextResponse.json({message : 'Login successfully'});

        const expiresIn = 7 * 24 * 60 * 60;
        const cookieOptions = {
            httpOnly: true,
            maxAge: expiresIn,
            path: '/',
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        };

        response.cookies.set('token', token, cookieOptions)

        
        // cookies().set('token', token, cookieOptions)

        return response;

    } catch (err) {
        console.log(err)
        return Response.json({ error: 'something went wrong, try again' }, { status: 500 })
    }
}