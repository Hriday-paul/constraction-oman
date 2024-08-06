'use client'

import AdminError from "@/components/Shared/Error/AdminError";
import AdminGetLoading from "@/components/Shared/Loading/AdminGetLoading";
import { useSendReplyMessageMutation, useSingleMessageQuery, useUpdateNewMessageMutation } from "@/Redux/Api/Api"
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

export default function MessafeDetails({ id }) {
    const { isError, isLoading, data } = useSingleMessageQuery({ id });
    const [postReply, { isLoading: rplyLoading, isError: rplyIsErr, isSuccess: replySuccess, error: rplyErr }] = useSendReplyMessageMutation();
    const router = useRouter();

    const [postNewMsg, { }] = useUpdateNewMessageMutation()

    useEffect(() => {
        postNewMsg(id)
    }, [id, postNewMsg])

    const handleReply = (e) => {
        e.preventDefault();
        postReply({ id, message: e.target.replyMsg.value });
    }

    useEffect(() => {
        if (replySuccess) {
            toast.success("Email send successfully")
        }
        if (rplyIsErr) {
            toast.error(rplyErr?.data?.error || 'email send failed, try again');
            if (rplyErr?.status == 401) {
                router.push('/xyz/admin/login')
            }
        }
    }, [rplyIsErr, replySuccess, rplyErr, router])


    return (
        <div>
            {
                isLoading ? <AdminGetLoading /> : isError ? <AdminError /> :
                    <div className="rounded-sm border bg-white shadow-default my-8">
                        <div className="border-b border-stroke py-4 px-6">
                            <h3 className="font-medium text-black">
                                Message Details
                            </h3>
                        </div>
                        <div className="max-w-full overflow-x-auto p-5 px-8">
                            <div className="mb-5">
                                <h3 className="text-xl text-black font-bold mb-1">{data?.name}</h3>
                                <p className="text-base text-black font-medium mb-1.5">{moment(data?.date_time).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                <div className="bg-slate-50 border w-full md:w-4/6 lg:w-2/3 min-h-60 p-7 my-3">
                                    <pre style={{ fontFamily: 'Roboto' }} className=" whitespace-pre-wrap">{data?.message}</pre>
                                </div>
                            </div>

                            <div className="flex flex-col items-end justify-end">
                                {
                                    data?.reply_msg ? <div className="w-full md:w-4/6 lg:w-2/3">
                                        <h3 className="text-xl text-black font-bold mb-1 text-right">Nancco</h3>
                                        <p className="text-base text-black font-medium mb-1.5 text-right">{moment(data?.reply_date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                        <div className="bg-slate-50 border w-full min-h-60 p-7 my-3">
                                            <pre style={{ fontFamily: 'Roboto' }} className=" whitespace-pre-wrap">{data?.reply_msg}</pre>
                                        </div>
                                    </div>
                                        :
                                        <form className="w-full md:w-4/6 lg:w-2/3 " onSubmit={handleReply}>
                                            <textarea required rows={5} type="text" name="replyMsg" className="w-full bg-slate-50 border p-10 focus:border-blue-500 focus:outline-none" placeholder="write something..." />

                                            <div className="flex justify-end my-5">
                                                <button disabled={rplyLoading} type="submit" className="border-o outline-none bg-blue-500 hover:bg-blue-600 duration-200 text-white text-base py-3 px-8 shadow flex flex-row items-center disabled:cursor-not-allowed disabled:bg-blue-400">
                                                    {
                                                        rplyLoading && <CgSpinner className="animate-spin text-white text-xl mr-1" />
                                                    }
                                                    Send Reply Email
                                                </button>
                                            </div>
                                        </form>
                                }

                            </div>

                        </div>

                    </div>
            }
        </div>
    )
}
