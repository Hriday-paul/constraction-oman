'use client'
import AdminError from "@/components/Shared/Error/AdminError"
import AdminGetLoading from "@/components/Shared/Loading/AdminGetLoading"
import { useAllSectorsQuery } from "@/Redux/Api/Api"
import Image from "next/image"
import EditSector from "./EditSector"
import DeleteSector from "./DeleteSector"


export default function AllSectors() {
    const { isLoading, isError, data } = useAllSectorsQuery()
    return (
        <div>
            {
                isLoading ? <AdminGetLoading /> : isError ? <AdminError /> :
                    <div>
                        <div className="rounded-sm border bg-white shadow-default my-8">
                            <div className="border-b border-stroke py-4 px-6">
                                <h3 className="font-medium text-black">
                                    All Sectors
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
                                                Category
                                            </th>
                                            <th className="py-4 px-4 font-medium text-black dark:text-white">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((sector, key) => (
                                            <tr key={sector?.id}>
                                                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                                        <div className="h-20 w-20 rounded-md">
                                                            <Image src={sector?.icon} height={500} width={500} className="h-20 w-auto" alt="director image" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                    <p className="text-black dark:text-white">
                                                        {sector?.service_name}
                                                    </p>
                                                </td>

                                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                    {/* <p className="text-black dark:text-white">
                                                        {sector?.category_id}
                                                    </p> */}
                                                    <p
                                                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${sector?.category_id === 0
                                                            ? 'bg-red-300 text-red-500 '
                                                            : sector?.category_id === 1
                                                                ? 'bg-green-300 text-green-500'
                                                                : 'bg-orange-300 text-orange-500'
                                                            }`}
                                                    >
                                                        {sector?.category_id == 0 ? 'Enginnering & construction' : sector?.category_id == 1 ? 'Water proof & flooring' : 'Mepi'}
                                                    </p>
                                                </td>


                                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                    <div className="flex items-center space-x-3.5">
                                                        <EditSector sector={sector} />
                                                        <DeleteSector id={sector?.id} />
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
