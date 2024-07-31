'use client'

import Image from "next/image";
import { useState } from "react"



export default function page() {
    const [file, setFile] = useState(null);
    const catagory = ["Comarcial","Residential","Hospitality"].map((data,index)=>{
        return <option value={data} key={index}>{data}</option>
    })

    return (
        <div>
            <div className="rounded-sm border bg-white shadow-default my-8">
                <div className="border-b border-stroke py-4 px-6">
                    <h3 className="font-medium text-black dark:text-white">
                        Change Project Information
                    </h3>
                </div>
                <form >
                    <div className="p-6">

                        <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Project Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Project Name"
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 `}
                                />
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Client Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Client Name"
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 `}
                                />
                            </div>
                        </div>

                        <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Project Location
                                </label>
                                <input
                                    type="address"
                                    placeholder="Project Location"
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 `}
                                />
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Project Budget
                                </label>
                                <input
                                    type="address"
                                    placeholder="Project Budget"
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 `}
                                />
                            </div>

                        </div>
                        <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2 xl:flex gap-2">
                            <div className="w-full xl:w-1/2 ">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    placeholder="Project Location"
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 `}
                                />
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Complete Date
                                </label>
                                <input
                                    type="date"
                                    placeholder="Project Location"
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 `}
                                />
                            </div>
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Cataghory
                                </label>
                                <select
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 `}
                                >
                                    {catagory}
                                </select>
                            </div>

                        </div>

                        <div className="mb-4 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Project Description
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Description"
                                    rows={8}
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 `}
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
                            <button className="border-o outline-none bg-blue-500 text-white text-base py-3 px-8">
                                Submit
                            </button>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    )
}
