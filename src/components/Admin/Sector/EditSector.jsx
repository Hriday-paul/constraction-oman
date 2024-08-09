import { useEditSectorMutation } from '@/Redux/Api/Api';
import { Drawer, Spin } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MdOutlineCategory, MdOutlineEdit } from 'react-icons/md';
import { PiSpinnerGapBold } from 'react-icons/pi';

const EditSector = React.memo(({ sector }) => {
  const [updateSector, { isLoading, isError, isSuccess, error }] = useEditSectorMutation();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
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
      name: sector?.service_name || '',
      category: sector?.category_id || '',
    }
  });

  const handleEdit = async (data) => {
    console.log(data)
    const form = new FormData();
    for (const key in data) {
      const value = data[key];

      if (value !== undefined && value !== null) {
        form.append(key, value.toString());
      }
    }
    form.append('id', sector?.id)
    form.append('image', file);
    // console.log(form)
    await updateSector(form).unwrap();
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("Sector Update successfully");
    }
    if (isError) {
      toast.error('Sector update failed, try again');
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
      <Drawer title="Edit Sector" onClose={onClose} open={open} width={720}>

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
                        className={`relative z-20 w-full appearance-none rounded border bg-transparent py-3 px-12 outline-none transition  dark:bg-form-input ${errors?.category ? 'border-red-500' : 'border-stroke focus:border-blue-500 active:border-blue-500'}`}
                      >
                        <option value="" disabled className="text-body dark:text-bodydark">
                          Select Caletgory
                        </option>
                        {
                          ["Enginnering & construction", "Water proof & flooring", "Mepi"].map((data, index) => {
                            return <option value={index} key={index}>{data}</option>
                          })
                        }
                      </select>
                    )}
                  ></Controller>

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
            <div className="flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Icon
                </label>
                <input
                  onChange={e => setFile(e.target.files[0])}
                  type="file"
                  accept="image/*"
                  placeholder="photo"
                  className={`w-full rounded border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white border-stroke focus:border-blue-500 active:border-blue-500 `}
                />
                <img src={file ? URL.createObjectURL(file) : sector?.icon} height={500} width={500} className="w-24 h-auto mx-auto mt-3" alt="profile pic"></Image>
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

EditSector.displayName = 'EditSector'
export default EditSector
