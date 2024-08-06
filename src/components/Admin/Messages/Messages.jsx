'use client'

import AdminError from "@/components/Shared/Error/AdminError";
import AdminGetLoading from "@/components/Shared/Loading/AdminGetLoading";
import { useMessagesQuery } from "@/Redux/Api/Api"
import moment from "moment";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";

export default function Messages() {
    const { isLoading, isError, data } = useMessagesQuery();

    return (
        <div>
            {
                isLoading ? <AdminGetLoading /> : isError ? <AdminError /> :
                    <div className="rounded-sm border bg-white shadow-default my-8">
                        <div className="border-b border-stroke py-4 px-6">
                            <h3 className="font-medium text-black">
                                Message
                            </h3>
                        </div>


                        <div className="max-w-full overflow-x-auto p-5">
                            <table className="w-full table-auto">
                                {/* <thead>
                                    <tr className="bg-gray-2 text-left dark:bg-meta-4 bg-slate-100">
                                        <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                            Name
                                        </th>
                                        <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                            Email
                                        </th>
                                        <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                            Phone
                                        </th>
                                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                                            Company
                                        </th>
                                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                                            View
                                        </th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    {data?.map((message, key) => (

                                        <tr key={message?.id} className="hover:bg-slate-100 duration-150">

                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {
                                                        message?.isNew == 1 && <p
                                                            className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-green-500 text-green-500}`}
                                                        >new</p>
                                                    }
                                                </p>
                                            </td>

                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {message?.name}
                                                </p>
                                            </td>

                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {message?.email}
                                                </p>
                                            </td>

                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white line-clamp-2">
                                                    <p className="text-black dark:text-white">{message?.phone}</p>
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white line-clamp-2">
                                                    <p className="text-black dark:text-white">{message?.company}</p>
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white line-clamp-2">
                                                    <p className="text-black dark:text-white">{moment(message?.date_time).format("MMM Do YY")}</p>
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <Link href={`message/${message?.id}`}>
                                                    <IoEyeOutline className='text-xl' />
                                                </Link>
                                            </td>

                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>


                    </div>
            }
        </div>
    )
}
