'use client'
import { useAddProjectManagerMutation } from '@/Redux/Api/Api';
import { Spin } from 'antd'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PiSpinnerGapBold } from 'react-icons/pi'

export default function Add_project_manager() {
  const [file, setFile] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addManager, { isLoading, isError, error, isSuccess, data: insertedData }] = useAddProjectManagerMutation();
  const router = useRouter();


  const handleAdd = async (data) => {
    const form = new FormData();
    for (const key in data) {
      const value = data[key];
      if (value !== undefined && value !== null) {
        form.append(key, value.toString());
      }
    }
    form.append('image', file);
    // console.log(form)
    await addManager(form).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Added successfully')
    }
    if (isError) {
      toast.error('Added failed, try again');
      if (error.status == 401) {
        router.push('/xyz/admin/login')
      }
    }
  }, [isSuccess, isError, error, router])


  return (
    <Spin size="large" spinning={isLoading} indicator={<PiSpinnerGapBold className="text-7xl animate-spin" />}>
      <div className="rounded-sm border bg-white shadow-default my-8">
        <div className="border-b border-stroke py-4 px-6">
          <h3 className="font-medium text-black">
            Add Project manager
          </h3>
        </div>

        <form onSubmit={handleSubmit(handleAdd)}>
          <div className="p-6">

            <div className="flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.name ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Position
                </label>
                <input
                  type="text"
                  {...register("position", { required: true })}
                  placeholder="position"
                  className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.name ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                />
              </div>
            </div>

            <p className='my-5'>Social Account</p>

            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Facebook
                </label>
                <input
                  type="text"
                  {...register("facebook")}
                  placeholder="facebook"
                  className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.name ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Instagram
                </label>
                <input
                  type="text"
                  {...register("instagram")}
                  placeholder="instagram"
                  className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.name ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                />
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  LinkedIn
                </label>
                <input
                  type="text"
                  {...register("linkedin")}
                  placeholder="linkedin"
                  className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.name ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Photo
                </label>
                <input
                  onChange={e => setFile(e.target.files[0])}
                  type="file"
                  placeholder="photo"
                  className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 `}
                />
                {file && <Image src={URL.createObjectURL(file)} height={500} width={500} className="w-24 h-auto mx-auto mt-3" alt="profile pic"></Image>}
              </div>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="border-o outline-none bg-blue-500 hover:bg-blue-600 duration-200 text-white text-base py-3 px-8 shadow">
                Add New
              </button>
            </div>

          </div>
        </form>

      </div>
    </Spin>
  )
}
