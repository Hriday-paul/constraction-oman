'use client'

import { useAddNewClientMutation } from "@/Redux/Api/Api";
import { Spin } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { PiSpinnerGapBold } from "react-icons/pi";

export default function AddClient() {
  const [insertClient, { isLoading, isError, isSuccess, error }] = useAddNewClientMutation()
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      return
    }
    const form = new FormData();
    const name = e.target.name.value;
    const website_url = e.target.websiteUrl.value;
    form.append('name', name);
    form.append('website_url', website_url);
    form.append('image', file);
    insertClient(form);
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Client added successfully')
      setFile(null);
    }
    if (isError) {
      toast.error('Client add failed, try again');
      if (error?.status == 401) {
        router.push('/xyz/admin/login')
      }
    }
  }, [isSuccess, isError, error, router])

  return (
    <Spin size="large" spinning={isLoading} indicator={<PiSpinnerGapBold className="text-7xl animate-spin" />}>
      <div className="rounded-sm border bg-white shadow-default my-8">
        <div className="border-b border-stroke py-4 px-6">
          <h3 className="font-medium text-black">
            Add New Client
          </h3>
        </div>

        <form className="p-6" onSubmit={handleSubmit}>

          <div className="flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500`}
              />
            </div>
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Website url
              </label>
              <input
                type="text"
                name='websiteUrl'
                placeholder="website url"
                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500`}
              />
            </div>
          </div>

          <div className="my-4 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Photo
              </label>
              <input
                onChange={e => setFile(e.target.files[0])}
                type="file"
                placeholder="photo"
                required
                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 `}
              />
              {file && <img src={URL.createObjectURL(file)} height={500} width={500} className="w-24 h-auto mx-auto mt-3" alt="profile pic"></Image>}
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="border-o outline-none bg-blue-500 hover:bg-blue-600 duration-200 text-white text-base py-3 px-8 shadow">
              Add New
            </button>
          </div>

        </form>

      </div>
    </Spin>
  )
}
