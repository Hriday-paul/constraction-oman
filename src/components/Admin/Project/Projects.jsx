'use client'

import AdminError from "@/components/Shared/Error/AdminError";
import AdminGetLoading from "@/components/Shared/Loading/AdminGetLoading";
import { useAllProjectsQuery } from "@/Redux/Api/Api"
import moment from "moment";
import EditProject from "./EditProject";
import { RiCheckboxCircleLine } from "react-icons/ri";
import DeleteProject from "./DeleteProject";

export default function Projects() {
  const { isLoading, isError, data } = useAllProjectsQuery();

  return (
    <div>
      {
        isLoading ? <AdminGetLoading /> : isError ? <AdminError /> :
          <div>
            <div className="rounded-sm border bg-white shadow-default my-8">
              <div className="border-b border-stroke py-4 px-6">
                <h3 className="font-medium text-black">
                  All Projects
                </h3>
              </div>

              <div className="max-w-full overflow-x-auto p-5">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-2 text-left dark:bg-meta-4 bg-slate-100">
                      <th className="min-w-[10px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                        Serial num
                      </th>
                      <th className="min-w-[10px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                        Visible home
                      </th>
                      <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                        Image
                      </th>
                      <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                        Name
                      </th>
                      <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                        Location
                      </th>
                      <th className="py-4 px-4 font-medium text-black dark:text-white">
                        Client
                      </th>
                      <th className="py-4 px-4 font-medium text-black dark:text-white">
                        Category
                      </th>
                      <th className="py-4 px-4 font-medium text-black dark:text-white">
                        Budget
                      </th>
                      <th className="py-4 px-4 font-medium text-black dark:text-white">
                        Sector
                      </th>
                      <th className="py-4 px-4 font-medium text-black dark:text-white">
                        Start date
                      </th>
                      <th className="py-4 px-4 font-medium text-black dark:text-white">
                        End date
                      </th>
                      <th className="py-4 px-4 font-medium text-black dark:text-white">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((project, indx) => (
                      <tr key={project?.id}>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {indx + 1}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {project?.is_best_projects && <RiCheckboxCircleLine className="text-xl text-green-500" />}
                          </p>

                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <div >
                            <div className="h-20 w-20 rounded-md bg-slate-100 flex justify-center items-center">
                              <p className="text-sm">View all</p>
                              {/* <img src={sector?.icon} height={500} width={500} className="h-20 w-auto" alt="director image" /> */}
                            </div>
                          </div>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {project?.name}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {project?.location}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {project?.client_name}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {project?.category}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {project?.budget}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {project?.service_name}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {moment(project?.start_date).format("MMM Do YY")}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">
                            {moment(project?.end_date).format("MMM Do YY")}
                          </p>
                        </td>

                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <div className="flex items-center space-x-3.5">
                            <EditProject project={project} />
                            <DeleteProject id={project?.id} />
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
