'use client'
import AdminError from '@/components/Shared/Error/AdminError';
import AdminGetLoading from '@/components/Shared/Loading/AdminGetLoading';
import { useContactQuery, useUpdateContactMutation } from '@/Redux/Api/Api';
import { Spin } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PiSpinnerGapBold } from 'react-icons/pi';

export default function EditContact() {
    const [postUpdate, { isLoading: updateLoading, isError: updateIsError, isSuccess: updateSuccess, error: updateError }] = useUpdateContactMutation();

    const { isLoading, isError, data } = useContactQuery();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            country: data?.country || '',
            address: data?.address || '',
            lat: data?.lat || '',
            longi: data?.longi || '',
            post_code: data?.post_code || '',
            toll_free: data?.toll_free || '',
            telephone: data?.telephone || '',
            fax: data?.fax || '',
            email: data?.email || '',
            head_office: data?.head_office || '',
            company: data?.company || '',
        }
    });

    useEffect(() => {
        if (data) {
            // Reset form with data from API
            reset({
                country: data?.country || '',
                address: data?.address || '',
                lat: data?.lat || '',
                longi: data?.longi || '',
                post_code: data?.post_code || '',
                toll_free: data?.toll_free || '',
                telephone: data?.telephone || '',
                fax: data?.fax || '',
                email: data?.email || '',
                head_office: data?.head_office || '',
                company: data?.company || '',
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
        await postUpdate(form).unwrap();
    };

    useEffect(() => {
        if (updateSuccess) {
            toast.success('Update successfully')
        }
        if (updateIsError) {
            toast.error('update failed, try again')
            if (updateError?.status == 401) {
                router.push('/xyz/admin/login')
            }
        }
    }, [updateSuccess, updateIsError, updateError, router]);


    return (
        <div>
            {
                isLoading ? <AdminGetLoading /> : isError ? <AdminError /> :
                    <Spin size="large" spinning={updateLoading} indicator={<PiSpinnerGapBold className="text-7xl animate-spin" />}>
                        <div className="rounded-sm border bg-white shadow-default my-8">
                            <div className="border-b border-stroke py-4 px-6">
                                <h3 className="font-medium text-black">
                                    Edit Contact page
                                </h3>
                            </div>

                            <form onSubmit={handleSubmit(handleEdit)}>
                                <div className="p-6">

                                    <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Email
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
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                {...register("company", { required: true })}
                                                placeholder="phone"
                                                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.company ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                {...register("country", { required: true })}
                                                placeholder="country"
                                                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.country ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                            />
                                        </div>
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Post code
                                            </label>
                                            <input
                                                type="text"
                                                {...register("post_code", { required: true })}
                                                placeholder="post code"
                                                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.post_code ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Toll free
                                            </label>
                                            <input
                                                type="text"
                                                {...register("toll_free", { required: true })}
                                                placeholder="toll free"
                                                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.toll_free ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                            />
                                        </div>
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Telephone
                                            </label>
                                            <input
                                                type="text"
                                                {...register("telephone", { required: true })}
                                                placeholder="telephone"
                                                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.telephone ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Fax
                                            </label>
                                            <input
                                                type="text"
                                                {...register("fax", { required: true })}
                                                placeholder="fax"
                                                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.fax ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                            />
                                        </div>
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Head office
                                            </label>
                                            <input
                                                type="text"
                                                {...register("head_office", { required: true })}
                                                placeholder="head_office"
                                                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.head_office ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Latitude
                                            </label>
                                            <input
                                                type="text"
                                                {...register("lat", { required: true })}
                                                placeholder="latitude"
                                                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.lat ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                            />
                                        </div>
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Longitude
                                            </label>
                                            <input
                                                type="text"
                                                {...register("longi", { required: true })}
                                                placeholder="longi"
                                                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.longi ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                {...register("address", { required: true })}
                                                placeholder="address"
                                                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.address ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
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
