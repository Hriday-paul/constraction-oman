import { useUpdateClientMutation } from "@/Redux/Api/Api";
import { Drawer, Spin } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineEdit } from "react-icons/md";
import { PiSpinnerGapBold } from "react-icons/pi";

const EditClient = React.memo(({ client }) => {
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [updateClient, { isSuccess, isError, isLoading, error }] = useUpdateClientMutation();
    const router = useRouter();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        const name = e.target.name.value;
        const website_url = e.target.websiteUrl.value;
        form.append('id', client?.id)
        form.append('name', name)
        form.append('website_url', website_url)
        form.append('image', file);
        updateClient(form);
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Client Update successfully");
        }
        if (isError) {
            toast.error('Client update failed, try again');
            if (error?.status == 401) {
                router.push('/xyz/admin/login')
            }
        }
    }, [isSuccess, isError, error, router])

    return (
        <Spin spinning={isLoading} indicator={<PiSpinnerGapBold className="text-7xl animate-spin" />}>
            <button onClick={showDrawer} className="bg-blue-500 p-3 text-white rounded hover:bg-blue-600 duration-200">
                <MdOutlineEdit />
            </button>
            <Drawer title="Edit Client" onClose={onClose} open={open} width={720}>

                <form className="p-6" onSubmit={handleSubmit}>

                    <div className="flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Name
                            </label>
                            <input
                                defaultValue={client?.name}
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
                                defaultValue={client?.website_url}
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
                                className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 `}
                            />
                            <img src={file ? URL.createObjectURL(file) : client?.image} height={500} width={500} className="w-24 h-auto mx-auto mt-3" alt="profile pic"></Image>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="border-o outline-none bg-blue-500 hover:bg-blue-600 duration-200 text-white text-base py-3 px-8 shadow">
                            Update
                        </button>
                    </div>

                </form>

            </Drawer>
        </Spin>
    )
})

EditClient.displayName = 'EditClient'
export default EditClient
