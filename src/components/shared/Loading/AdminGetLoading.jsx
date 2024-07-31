import React from 'react'
import { ImSpinner8 } from 'react-icons/im'

export default function AdminGetLoading() {
    return (
        <div className='h-[calc(100vh-52px)] bg-white flex justify-center items-center'>
            <ImSpinner8 className='text-5xl text-blue-500 animate-spin' />
        </div>
    )
}
