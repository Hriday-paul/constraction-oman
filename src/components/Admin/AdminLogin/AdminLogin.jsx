'use client'
import { useLoginAdminMutation } from "@/Redux/Api/Api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { MdErrorOutline, MdOutlineDoneAll } from "react-icons/md";

export default function AdminLogin() {
    const [postLogin, { isSuccess, isError, isLoading, data, error }] = useLoginAdminMutation();
    const [message, setMessage] = useState(null);
    const router = useRouter();

    const loginAdmin = async (e) => {
        e.preventDefault();
        const name = e.target.user_name.value;
        const password = e.target.password.value;
        postLogin({ user_name: name, password })
    }

    useEffect(() => {
        if (isSuccess) {
            setMessage({ type: 'success', message: data?.message || 'login successfully' });
            router.push('/xyz/admin')
        }
        if (isError) {
            setMessage({ type: 'error', message: error?.data?.error || 'something went wrong' })
        }
    }, [isSuccess, isError, data, error, router]);


    return (
        <div>
            <div className="bg-gray-200 h-screen flex flex-col items-center justify-center p-4 dark:bg-slate-800">
                <img src={'/nanco-logo-black.png'} alt="logo" height={400} width={500} className="w-32 h-auto mx-auto" />
                <div className="bg-white p-6 shadow-lg rounded w-96 dark:bg-slate-100 mt-5">

                    <form onSubmit={loginAdmin}>
                        <div className="text-2xl text-blue-800 font-bold capitalize text-center mb-4">
                            <h3>Login As Admin</h3>
                        </div>
                        {message && <div className='py-2'>
                            <div className={`${message?.type === 'error' ? 'bg-red-100 border border-orange-200 p-1.5 w-full rounded flex items-center mb-3' : 'bg-green-100 border border-green-200 p-2 w-full rounded-md flex items-center mb-3'}`}>
                                {message?.type == 'error' && <MdErrorOutline className='text-2xl text-orange-500' />}
                                {message?.type == 'success' && <MdOutlineDoneAll className='text-2xl text-green-500' />}
                                <p className='text-black dark:text-white text-base ml-2'>{message?.message}</p>
                            </div>
                        </div>}
                        <div>
                            <div>
                                <div className="capitalize text-xl mb-2">
                                    <label>username</label>
                                </div>
                                <div className="border-2 relative">
                                    <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </span>
                                    <input required name="user_name" className="w-full placeholder:capitalize px-8 py-1.5 outline-none bg-slate-50" type="text" placeholder="enter username" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="capitalize text-xl mb-2">
                                    <label>password</label>
                                </div>
                                <div className="border-2 relative">
                                    <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                    </span>
                                    <input required name="password" className="w-full placeholder:capitalize px-8 py-1.5 outline-none bg-slate-50" type="password" placeholder="enter password" />
                                </div>
                            </div>
                            <div className="sm:flex sm:justify-between inline-block my-4">
                                <div>

                                </div>
                                <div className="text-blue-800 hover:underline">
                                    <a href="#">Forgot password?</a>
                                </div>
                            </div>
                            <div>
                                <button disabled={isLoading} type="submit" className="bg-blue-800 disabled:bg-blue-500 disabled:cursor-not-allowed text-xl flex flex-row items-center justify-center gap-x-3 text-white font-medium uppercase p-2 rounded w-full opacity-90 hover:opacity-100">
                                    {isLoading && <CgSpinner className="text-2xl text-white animate-spin" />}
                                    <spin>login</spin>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
