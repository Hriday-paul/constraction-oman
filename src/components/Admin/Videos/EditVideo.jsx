import { useUpdateVideoMutation } from '@/Redux/Api/Api';
import { Drawer, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MdOutlineEdit } from 'react-icons/md';
import { PiSpinnerGapBold } from 'react-icons/pi';

const EditVideo = React.memo(({ video }) => {
    const [postUpdate, {isError, isLoading, isSuccess, error}] = useUpdateVideoMutation();
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: video?.title || '',
            details: video?.details || '',
            src: video?.src || '',
        }
    });

    useEffect(() => {
        if (isSuccess) {
          toast.success("Video Update successfully");
        }
        if (isError) {
          toast.error(error?.data?.error || 'Video update failed, try again');
          if (error?.status == 401) {
            router.push('/xyz/admin/login')
          }
        }
      }, [isSuccess, isError, error, router])

    const handleEdit = async (data) => {
        postUpdate({...data, id : video?.id})
    }

    return (
        <Spin spinning={isLoading} indicator={<PiSpinnerGapBold className="text-7xl animate-spin" />}>
            <button onClick={showDrawer} className="bg-blue-500 p-3 text-white rounded hover:bg-blue-600 duration-200">
                <MdOutlineEdit />
            </button>
            <Drawer title="Edit Video" onClose={onClose} open={open} width={720}>

                <form onSubmit={handleSubmit(handleEdit)}>
                    <div className="p-6">
                        <div className="flex flex-col gap-6">
                            <div className="w-full mb-5">
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
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="w-full mb-5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Details
                                </label>
                                <textarea
                                    type="text"
                                    rows={6}
                                    {...register("details", { required: true })}
                                    placeholder="details"
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.details ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="w-full mb-5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Embeded Video Url
                                </label>
                                <input
                                    type="text"
                                    {...register("src", { required: true })}
                                    placeholder="video url"
                                    className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white ${errors?.src ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500 dark:border-form-strokedark dark:focus:border-blue-500'}`}
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

            </Drawer>

        </Spin>
    )
})

export default EditVideo;