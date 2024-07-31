import { useUpdateProjectManagerMutation } from "@/Redux/Api/Api";
import { Drawer, Spin } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiSpinnerGapBold } from "react-icons/pi";

export default function EditProjManager({ people }) {
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [updatePeople, { isLoading, error, isError, isSuccess, data }] = useUpdateProjectManagerMutation();
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

    useMemo(() => {
        if (isSuccess) {
            toast.success('Update successfully')
        }
        if (isError) {
            toast.error('update failed, try again')
            if (error.status == 401) {
                router.push('/xyz/admin/login')
            }
        }
    }, [isSuccess, isError])

    return (
        <Spin spinning={isLoading} indicator={<PiSpinnerGapBold className="text-7xl animate-spin" />}>
            <button onClick={showDrawer} className="bg-blue-500 p-3 text-white rounded hover:bg-blue-600 duration-200">
                <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                        fill=""
                    />
                    <path
                        d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                        fill=""
                    />
                </svg>
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
                                <Image src={file ? URL.createObjectURL(file) : people?.image} height={500} width={500} className="w-24 h-auto mx-auto mt-3" alt="profile pic"></Image>
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
}
