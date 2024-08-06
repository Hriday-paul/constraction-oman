'use client'

import AdminError from "@/components/Shared/Error/AdminError";
import AdminGetLoading from "@/components/Shared/Loading/AdminGetLoading";
import { useChairmenInfoQuery, useUpdateChairmanMutation } from "@/Redux/Api/Api";
import { Spin } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiSpinnerGapBold } from "react-icons/pi";

export default function EditChairman() {
    const { isLoading, isError, data } = useChairmenInfoQuery();
    const [file, setFile] = useState(null);
    const [updateChairman, { isLoading: updateLoading, isError: updateError, error, isSuccess: updateSuccess }] = useUpdateChairmanMutation();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: data?.name || '',
            email: data?.email || '',
            phone: data?.phone || '',
            message: data?.message || '',
        }
    });

    useEffect(() => {
        if (data) {
            // Reset form with data from API
            reset({
                name: data?.name || '',
                email: data?.email || '',
                phone: data?.phone || '',
                message: data?.message || '',
            });
        }
    }, [data, reset]);

    const handleEdit = async (data) => {
        const form = new FormData();
        for (const key in data) {
            const value = data[key];

            if (value !== undefined && value !== null) {
                form.append(key, value.toString());
            }
        }
        form.append('image', file);
        // console.log(form)
        await updateChairman(form).unwrap();
    };

    useEffect(() => {
        if (updateSuccess) {
            toast.success('Update successfully')
        }
        if (updateError) {
            toast.error('update failed, try again')
            if (error?.status == 401) {
                router.push('/xyz/admin/login')
            }
        }
    }, [updateSuccess, updateError, error, router])

    return (
        <div>

            {isLoading ? <AdminGetLoading /> : isError ? <AdminError /> :
                <Spin size="large" spinning={updateLoading} indicator={<PiSpinnerGapBold className="text-7xl animate-spin" />}>
                    <div className="rounded-sm border bg-white shadow-default my-8">
                        <div className="border-b border-stroke py-4 px-6">
                            <h3 className="font-medium text-black dark:text-white">
                                Change Chairman Information
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit(handleEdit)}>
                            <div className="p-6">

                                <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Chairman Name
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
                                            Chairman Phone
                                        </label>
                                        <input
                                            type="number"
                                            {...register("phone", { required: true })}
                                            placeholder="phone"
                                            className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.phone ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Chairman Email
                                        </label>
                                        <input
                                            type="email"
                                            {...register("email", { required: true })}
                                            placeholder="email"
                                            className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.email ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
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
                                        <Image src={file ? URL.createObjectURL(file) : data?.image} height={500} width={500} className="w-24 h-auto mx-auto mt-3" alt="profile pic"></Image>
                                    </div>

                                </div>

                                <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Chairman Message
                                        </label>
                                        <textarea
                                            type="text"
                                            {...register("message", { required: true })}
                                            placeholder="message"
                                            rows={8}
                                            className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.message ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                        />
                                    </div>

                                </div>

                                <div className="flex justify-end">
                                    <button type="submit" className="border-o outline-none bg-blue-500 hover:bg-blue-600 duration-200 text-white text-base py-3 px-8 shadow">
                                        Update
                                    </button>
                                </div>

                            </div>

                        </form>

                    </div>
                </Spin>
            }

        </div>
    )
}
