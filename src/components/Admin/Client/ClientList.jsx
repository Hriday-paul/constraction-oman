'use client'

import AdminError from "@/components/Shared/Error/AdminError";
import AdminGetLoading from "@/components/Shared/Loading/AdminGetLoading";
import { useAllClientsQuery } from "@/Redux/Api/Api"
import Image from "next/image";
import EditClient from "./EditClient";
import DeleteClient from "./DeleteClient";

export default function ClientList() {
  const { isLoading, isError, data } = useAllClientsQuery();

  return (
    <div>
      {
        isLoading ? <AdminGetLoading /> : isError ? <AdminError /> : <div>
          <div className="rounded-sm border bg-white shadow-default my-8">
            <div className="border-b border-stroke py-4 px-6">
              <h3 className="font-medium text-black">
                Our Partners
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
                      Website url
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((client, key) => (
                    <tr key={client?.id}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                          <div className="rounded-md">
                            <Image src={client?.image} height={500} width={500} className="h-16 w-auto" alt="director image" />
                          </div>
                          <p className="text-sm text-black dark:text-white">
                            {client?.position}
                          </p>
                        </div>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {client?.name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {client?.website_url}
                        </p>
                      </td>

                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">

                          <EditClient client={client} />
                          <DeleteClient id={client?.id} />
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
