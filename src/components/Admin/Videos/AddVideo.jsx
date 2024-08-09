'use client'

import { useAddVideoMutation } from "@/Redux/Api/Api";
import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiSpinnerGapBold } from "react-icons/pi";

const AddVideo = () => {
    const [postNewVideo, { isLoading, isError, isSuccess, error }] = useAddVideoMutation();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleAdd = async (data) => {
        postNewVideo(data)
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Video added successfully')
        }
        if (isError) {
            toast.error(error?.data?.error || 'video added failed, try again');
            if (error.status == 401) {
                router.push('/xyz/admin/login')
            }
        }
    }, [isError, isSuccess, error, router])

    return (
        <div>
            <Spin size="large" spinning={isLoading} indicator={<PiSpinnerGapBold className="text-7xl animate-spin" />}>
                <div className="rounded-sm border bg-white shadow-default my-8">
                    <div className="border-b border-stroke py-4 px-6">
                        <h3 className="font-medium text-black">
                            Add New Video
                        </h3>
                    </div>
                    <form className="p-6" onSubmit={handleSubmit(handleAdd)}>
                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2 mb-5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    {...register("title", { required: true })}
                                    placeholder="title"
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.title ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                />
                            </div>

                            <div className="w-full xl:w-1/2 mb-5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Video Embeded url
                                </label>
                                <input
                                    type="text"
                                    {...register("src", { required: true })}
                                    placeholder="src"
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.src ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Details
                                </label>
                                <textarea
                                    type="text"
                                    {...register("details", { required: true })}
                                    placeholder="details"
                                    rows={6}
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.details ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                />
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
        </div>
    )
}

export default AddVideo;
