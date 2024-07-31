'use client'

import AdminGetLoading from "@/components/Shared/Loading/AdminGetLoading";
import { usePeoplesQuery } from "@/Redux/Api/Api"
import Image from "next/image";
import Link from "next/link";
import EditProjManager from "./EditProjManager";
import AdminError from "@/components/Shared/Error/AdminError";
import DeleteProjManager from "./DeleteProjManager";

export default function Peoples() {
    const { isLoading, isError, data } = usePeoplesQuery();

    return (
        <div>
            {
                isLoading ? <AdminGetLoading /> : isError ? <AdminError /> : <div>
                    <div className="rounded-sm border bg-white shadow-default my-8">
                        <div className="border-b border-stroke py-4 px-6">
                            <h3 className="font-medium text-black">
                                Our CEO
                            </h3>
                        </div>

                        <div className="max-w-full overflow-x-auto p-5">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-2 text-left dark:bg-meta-4 bg-slate-100">
                                        <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                            Image
                                        </th>
                                        <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                            Name
                                        </th>
                                        <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                            Email
                                        </th>
                                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                                            Phone
                                        </th>
                                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                                            Message
                                        </th>
                                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                                            Facebook
                                        </th>
                                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                                            Instagram
                                        </th>
                                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                                            Linkedin
                                        </th>
                                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.directors?.map((director, key) => (
                                        <tr key={director?.id}>
                                            <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                                    <div className="h-20 w-20 rounded-md">
                                                        <Image src={director?.image} height={500} width={500} className="h-20 w-auto" alt="director image" />
                                                    </div>
                                                    <p className="text-sm text-black dark:text-white">
                                                        {director?.position}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {director?.name}
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {director?.email}
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {director?.phone}
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white line-clamp-2">
                                                    {director?.message}
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white line-clamp-2">
                                                    <Link href={director?.facebook} target="_blank">{director?.facebook}</Link>
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white line-clamp-2">
                                                    <Link href={director?.instagram} target="_blank">{director?.instagram}</Link>
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white line-clamp-2">
                                                    <Link href={director?.linkedin} target="_blank">{director?.linkedin}</Link>
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <div className="flex items-center space-x-3.5">
                                                    <Link href={director?.position == 'Chairman' ? '/xyz/admin/peoples/edit-chairmen' : '/xyz/admin/peoples/edit-md'} className="hover:text-primary">
                                                        <svg
                                                            className="fill-current"
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 18 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                                                                fill=""
                                                            />
                                                            <path
                                                                d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                                                                fill=""
                                                            />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>


                    <div className="rounded-sm border bg-white shadow-default my-8">
                        <div className="border-b border-stroke py-4 px-6">
                            <h3 className="font-medium text-black">
                                Peoples
                            </h3>
                        </div>

                        <div className="max-w-full overflow-x-auto p-5">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-2 text-left dark:bg-meta-4 bg-slate-100">
                                        <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                            Image
                                        </th>
                                        <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                            Name
                                        </th>
                                        <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                            Position
                                        </th>
                                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                                            Facebook
                                        </th>
                                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                                            Instagram
                                        </th>
                                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                                            Linkedin
                                        </th>
                                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.pManagers?.map((people, key) => (
                                        <tr key={people?.id}>
                                            <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                                    <div className="h-20 w-20 rounded-md">
                                                        <Image src={people?.image} height={500} width={500} className="h-20 w-auto" alt="director image" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {people?.name}
                                                </p>
                                            </td>

                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {people?.position}
                                                </p>
                                            </td>

                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white line-clamp-2">
                                                    <Link href={people?.facebook} target="_blank">{people?.facebook}</Link>
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white line-clamp-2">
                                                    <Link href={people?.instagram} target="_blank">{people?.instagram}</Link>
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white line-clamp-2">
                                                    <Link href={people?.linkedin} target="_blank">{people?.linkedin}</Link>
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                <div className="flex items-center space-x-3.5">

                                                    <EditProjManager people={people}/>
                                                    <DeleteProjManager id={people?.id}/>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>
            }

        </div>
    )
}
