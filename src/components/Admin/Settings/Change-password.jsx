'use client'

import { useUpdatePasswordMutation } from '@/Redux/Api/Api';
import { Spin } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PiSpinnerGapBold } from 'react-icons/pi';

export default function ChangePassword() {
  const [postPassword, { isLoading, isError, isSuccess, error }] = useUpdatePasswordMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAdd = async (data) => {
    postPassword(data)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password Update successfully");
    }
    if (isError) {
      toast.error(error?.data?.error || 'Password update failed, try again');
      if (error?.status == 401) {
        router.push('/xyz/admin/login')
      }
    }
  }, [isSuccess, isError, error, router])

  return (
    <Spin size="large" spinning={isLoading} indicator={<PiSpinnerGapBold className="text-7xl animate-spin" />}>
      <div className="rounded-sm border bg-white shadow-default my-8 max-w-96 mx-auto">
        <div className="border-b border-stroke py-4 px-6">
          <h3 className="font-medium text-black">
            Update password
          </h3>
        </div>
        <form className="p-6" onSubmit={handleSubmit(handleAdd)}>
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <label className="mb-2.5 block text-black dark:text-white">
                Current Username *
              </label>
              <input
                type="text"
                {...register("currentUsername", { required: true })}
                placeholder="current username"
                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.currentUsername ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
              />
            </div>
            <div className="w-full">
              <label className="mb-2.5 block text-black dark:text-white">
                Current Password *
              </label>
              <input
                type="password"
                {...register("currentPassword", { required: true })}
                placeholder="current password"
                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.currentPassword ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
              />
            </div>
          </div>
          <p className='my-5'>Update Info</p>
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <label className="mb-2.5 block text-black dark:text-white">
                Update Password *
              </label>
              <input
                type="password"
                {...register("updatePassword", { required: true })}
                placeholder="update password"
                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.updatePassword ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
              />
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <button type="submit" className="border-o outline-none bg-blue-500 hover:bg-blue-600 duration-200 text-white text-base py-3 px-8 shadow">
              Update
            </button>
          </div>
        </form>

      </div>
    </Spin>
  )
}
