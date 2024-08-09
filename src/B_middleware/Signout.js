'use server'
import { cookies } from 'next/headers'

export const Signout = async()=>{
    try{
        cookies().delete('token')
        return true;
    }catch(err){
        throw new Error(err?.message)
    }
}