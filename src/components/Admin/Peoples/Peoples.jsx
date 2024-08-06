'use client'

import AdminGetLoading from "@/components/Shared/Loading/AdminGetLoading";
import { usePeoplesQuery } from "@/Redux/Api/Api"
import Image from "next/image";
import Link from "next/link";
import EditProjManager from "./EditProjManager";
import AdminError from "@/components/Shared/Error/AdminError";
import DeleteProjManager from "./DeleteProjManager";
import { MdOutlineEdit } from "react-icons/md";

export default function Peoples() {
    const { isLoading, isError, data } = usePeoplesQuery();

    console.log(isError)

    return (
        <div>
            {
                isLoading ? <AdminGetLoading /> : isError ? <AdminError /> :
                    <div>
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
                                                            <MdOutlineEdit />
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

                                                        <EditProjManager people={people} />
                                                        <DeleteProjManager id={people?.id} />
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
