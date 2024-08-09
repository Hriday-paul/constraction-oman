import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'

export async function CreatJwtToken({ user_name }) {
    try {
        const expiresIn = 7 * 24 * 60 * 60; // 7 days
        const token = jwt.sign({ user_name, isAdmin: true }, process.env.JWT_TOKEN_SECRET, { expiresIn });
        return token;
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 500 })
    }
}

export const verifyToken = async (token) => {
    try {
        const decodedData = jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decode) => {
            if (err) {
                return Response.json({ error: 'session time expired' }, { status: 401 })
            }
            return decode;
        })
        return decodedData
    } catch (err) {
        return Response.json({ error: 'something went wrong, try again' }, { status: 500 })
    }
}
