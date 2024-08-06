'use client'
import React, { useEffect, useRef } from 'react'
import Image from "next/image";
import { useState } from "react"
import { MdOutlineCategory } from 'react-icons/md';
import { FaUserGroup } from 'react-icons/fa6';
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { Controller, useForm } from 'react-hook-form';
import MultiSelect from './Template/MultiSelect';
import PhotoUploader from './Template/PhotoUploader';
import toast from 'react-hot-toast';
import { useAddProjectMutation, useAllClientsQuery, useAllSectorsQuery, usePeoplesQuery } from '@/Redux/Api/Api';
import { Spin } from 'antd';
import { PiSpinnerGapBold } from 'react-icons/pi';
import { useRouter } from 'next/navigation';

export default function AddProject() {
    const { isLoading: sectorloading, isError: sectorError, data: sectors } = useAllSectorsQuery();
    const { isLoading: clientloading, isError: clientError, data: clients } = useAllClientsQuery();
    const { isLoading: peopleloading, isError: peopleError, data: peoples } = usePeoplesQuery();
    const [images, setImages] = useState([]);
    const [postProject, { isError, isLoading, isSuccess, error }] = useAddProjectMutation();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const handleAdd = async (data) => {
        if (images.length == 0) {
            toast.error('Please, choose a project image');
            return;
        }
        const form = new FormData();
        for (const key in data) {
            const value = data[key];
            if (value !== undefined && value !== null) {
                form.append(key, value.toString());
            }
        }
        form.append('images', JSON.stringify(images));
        await postProject(form).unwrap();
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Project Added successfully')
        }
        if (isError) {
            toast.error(error?.data?.error || 'Project added failed, try again');
            if (error.status == 401) {
                router.push('/xyz/admin/login')
            }
        }
    }, [isSuccess, isError, error, router])

    return (
        <Spin size="large" spinning={isLoading} indicator={<PiSpinnerGapBold className="text-7xl animate-spin" />}>
            <div>
                <div className="rounded-sm border bg-white shadow-default my-8">
                    <div className="border-b border-stroke py-4 px-6">
                        <h3 className="font-medium text-black dark:text-white">
                            Add New Project
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit(handleAdd)}>
                        <div className="p-6">

                            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Project Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name", { required: true })}
                                        placeholder="Project Name"
                                        className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.name ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                    />
                                </div>

                                <div className='w-full xl:w-1/2'>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Select Category
                                    </label>

                                    <div className="relative z-20 bg-white dark:bg-form-input">
                                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                                            <MdOutlineCategory />
                                        </span>

                                        <Controller
                                            name="category"
                                            control={control}
                                            rules={{ required: "category is required" }}
                                            render={({ field }) => (
                                                <select
                                                    onChange={(e) => field.onChange(e.target.value)}
                                                    className={`relative z-20 w-full appearance-none rounded border  bg-transparent py-3 px-12 outline-none transition  dark:bg-form-input ${errors?.category ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                                >
                                                    <option value="" disabled className="text-body dark:text-bodydark">
                                                        Select Caletgory
                                                    </option>
                                                    {
                                                        ["Enginnering & construction", "Water proof & flooring", "Mepi"].map((data, index) => {
                                                            return <option value={index + 1} key={index + data}>{data}</option>
                                                        })
                                                    }
                                                </select>

                                            )}></Controller>

                                        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g opacity="0.8">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                        fill="#637381"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                            </div>

                            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                <div className='w-full xl:w-1/2'>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Select Client
                                    </label>

                                    <div className="relative z-20 bg-white dark:bg-form-input">
                                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                                            <FaUserGroup />
                                        </span>

                                        <Controller
                                            name="client"
                                            control={control}
                                            rules={{ required: "client is required" }}
                                            render={({ field }) => (
                                                <select
                                                    onChange={(e) => field.onChange(e.target.value)}
                                                    className={`relative z-20 w-full appearance-none rounded border  bg-transparent py-3 px-12 outline-none transition  dark:bg-form-input ${errors?.client ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                                >
                                                    <option value="" disabled className="text-body dark:text-bodydark">
                                                        Choose Client
                                                    </option>
                                                    {
                                                        clientloading ? <></> : clientError ? <></> :
                                                            clients?.map((client) => {
                                                                return <option value={client.id} key={client.id} className="text-body dark:text-bodydark text-black">{client?.name}</option>
                                                            })
                                                    }
                                                </select>
                                            )}></Controller>

                                        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g opacity="0.8">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                        fill="#637381"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Project Location
                                    </label>
                                    <input
                                        {...register("location", { required: true })}
                                        type="text"
                                        placeholder="Project Location"
                                        className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.location ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                    />
                                </div>

                            </div>

                            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Project Budget
                                    </label>
                                    <input
                                        type="text"
                                        {...register("budget", { required: true })}
                                        placeholder="Project Budget"
                                        className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.budget ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                    />
                                </div>
                                {/* <MultiSelect selected={selected} setSelected={setSelected} /> */}

                                <div className='w-full xl:w-1/2'>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Select Sector
                                    </label>

                                    <div className="relative z-20 bg-white dark:bg-form-input">
                                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                                            <FaUserGroup />
                                        </span>

                                        <Controller
                                            name="sector"
                                            control={control}
                                            rules={{ required: "sector is required" }}
                                            render={({ field }) => (
                                                <select
                                                    onChange={(e) => field.onChange(e.target.value)}
                                                    className={`relative z-20 w-full appearance-none rounded border  bg-transparent py-3 px-12 outline-none transition  dark:bg-form-input ${errors?.sector ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                                >
                                                    <option value="" disabled className="text-body dark:text-bodydark text-black">
                                                        Choose sector
                                                    </option>
                                                    {
                                                        sectorloading ? <></> : sectorError ? <></> :
                                                            sectors?.map((sector) => {
                                                                return <option value={sector.id} key={sector.id} className="text-body dark:text-bodydark text-black">{sector?.service_name}</option>
                                                            })
                                                    }
                                                </select>
                                            )}></Controller>

                                        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g opacity="0.8">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                        fill="#637381"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                            </div>

                            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                <Controller
                                    name="startDate"
                                    control={control}
                                    rules={{ required: "start date is required" }}
                                    render={({ field }) => (
                                        <Flatpickr
                                            placeholder='YYYY-MM-DD'
                                            defaultValue={new Date()}
                                            onChange={(date, str) => {
                                                field.onChange(str)
                                            }}
                                            render={
                                                ({ defaultValue }, ref) => {
                                                    return <div className='w-full xl:w-1/2'>
                                                        <label className="mb-2.5 block text-black dark:text-white" >
                                                            Project start date
                                                        </label>
                                                        <input defaultValue={defaultValue} placeholder='YYYY-MM-DD' ref={ref} className={`form-datepicker w-full rounded border-[1.5px] bg-transparent px-5 py-3 font-normal outline-none transition dark:bg-form-input ${errors?.startDate ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`} />
                                                    </div>
                                                }
                                            }
                                        />
                                    )}
                                />
                                <Controller
                                    name="completeDate"
                                    control={control}
                                    rules={{ required: "complete date is required" }}
                                    render={({ field }) => (
                                        <Flatpickr
                                            placeholder='YYYY-MM-DD'
                                            defaultValue={new Date()}
                                            onChange={(date, str) => {
                                                field.onChange(str)
                                                console.log(date);
                                            }}
                                            render={
                                                ({ defaultValue }, ref) => {
                                                    return <div className='w-full xl:w-1/2'>
                                                        <label className="mb-2.5 block text-black dark:text-white" >
                                                            Project Complete date
                                                        </label>
                                                        <input defaultValue={defaultValue} placeholder='YYYY-MM-DD' ref={ref} className={`form-datepicker w-full rounded border-[1.5px] bg-transparent px-5 py-3 font-normal outline-none transition dark:bg-form-input ${errors?.completeDate ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`} />
                                                    </div>
                                                }
                                            }
                                        />
                                    )}
                                />


                            </div>

                            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Project Description
                                    </label>
                                    <textarea
                                        {...register("details", { required: true })}
                                        type="text"
                                        placeholder="Description"
                                        rows={8}
                                        className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.details ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                    />
                                </div>
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Photo
                                    </label>
                                    <PhotoUploader images={images} setImages={setImages} />


                                </div>
                            </div>

                            <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                                <div className='w-full xl:w-1/2'>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Select Project Manager
                                    </label>

                                    <div className="relative z-20 bg-white dark:bg-form-input">
                                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                                            <FaUserGroup />
                                        </span>

                                        <Controller
                                            name="pManager"
                                            control={control}
                                            rules={{ required: "pManager is required" }}
                                            render={({ field }) => (
                                                <select
                                                    onChange={(e) => field.onChange(e.target.value)}
                                                    className={`relative z-20 w-full appearance-none rounded border  bg-transparent py-3 px-12 outline-none transition  dark:bg-form-input ${errors?.pManager ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                                >
                                                    <option value="" disabled className="text-body dark:text-bodydark text-black">
                                                        Choose Project Manager
                                                    </option>
                                                    {
                                                        peopleloading ? <></> : peopleError ? <></> :
                                                            peoples?.pManagers?.map((people) => {
                                                                return <option value={people.id} key={people.id} className="text-body dark:text-bodydark text-black">{people?.name}</option>
                                                            })
                                                    }
                                                </select>
                                            )}></Controller>

                                        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g opacity="0.8">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                        fill="#637381"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <Controller
                                        name="isBest"
                                        control={control}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="checkbox"
                                                className="
                                relative w-6 h-6 aspect-square
                                bg-white border border-gray-300
                                shadow-sm rounded cursor-pointer
                                transition-all duration-300 ease-in-out
                                checked:bg-gradient-to-tr checked:from-blue-500 checked:to-white
                                checked:border-blue-500 hover:border-blue-500
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/30
                                after:w-[35%] after:h-[53%] after:absolute after:opacity-0
                                after:top-[40%] after:left-[50%] after:-translate-x-2/4 after:-translate-y-2/4
                                after:rotate-[25deg] after:drop-shadow-[1px_0.5px_1px_rgba(56,149,248,0.5)]
                                after:border-r-[0.25em] after:border-r-white after:border-b-[0.25em] after:border-b-white
                                after:transition-all after:duration-200 after:ease-linear
                                checked:after:opacity-100 checked:after:rotate-45"/>
                                        )}
                                    />

                                    <p>Best project</p>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button className="border-o outline-none bg-blue-500 hover:bg-blue-600 duration-200 text-white text-base py-3 px-8">
                                    Submit
                                </button>
                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </Spin>
    )
}
