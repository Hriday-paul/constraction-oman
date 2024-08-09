import { useUpdateProjectManagerMutation } from "@/Redux/Api/Api";
import { Drawer, Spin } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdOutlineEdit } from "react-icons/md";
import { PiSpinnerGapBold } from "react-icons/pi";

const EditProjManager = React.memo(({ people }) => {
    const [updatePeople, { isLoading, error, isError, isSuccess }] = useUpdateProjectManagerMutation();
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const router = useRouter()

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: people?.name,
            position: people?.position,
            facebook: people?.name,
            instagram: people?.instagram,
            linkedin: people?.linkedin,
        }
    });

    const handleEdit = async (data) => {
        const form = new FormData();
        for (const key in data) {
            const value = data[key];

            if (value !== undefined && value !== null) {
                form.append(key, value.toString());
            }
        }
        form.append('id', people?.id)
        form.append('image', file);
        // console.log(form)
        await updatePeople(form).unwrap();
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Update successfully')
        }
        if (isError) {
            toast.error('update failed, try again')
            if (error.status == 401) {
                router.push('/xyz/admin/login')
            }
        }
    }, [isSuccess, isError, error, router])

    return (
        <Spin spinning={isLoading} indicator={<PiSpinnerGapBold className="text-7xl animate-spin" />}>
            <button onClick={showDrawer} className="bg-blue-500 p-3 text-white rounded hover:bg-blue-600 duration-200">
                <MdOutlineEdit />
            </button>
            <Drawer title="Edit people" onClose={onClose} open={open} width={720}>
                <form onSubmit={handleSubmit(handleEdit)}>
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

                        </div>

                        <div className="mb-4 flex flex-col gap-6 xl:flex-row">
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
                                <img src={file ? URL.createObjectURL(file) : people?.image} height={500} width={500} className="w-24 h-auto mx-auto mt-3" alt="profile pic"></Image>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button type="submit" className="border-o outline-none bg-blue-500 hover:bg-blue-600 duration-200 text-white text-base py-3 px-8 shadow">
                                Update
                            </button>
                        </div>

                    </div>
                </form>
            </Drawer>
        </Spin>
    )
})

EditProjManager.displayName = 'EditProjManager'
export default EditProjManager;