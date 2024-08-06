import { useFileUploadMutation } from '@/Redux/Api/Api';
import { Modal, Progress } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineCloudUpload } from 'react-icons/md';
import DraftImages from './DraftImages';

const PhotoUploader = React.memo(({ images, setImages }) => {
    const [uploadImage, { isError, isSuccess, error, data }] = useFileUploadMutation();
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [parcent, setParcent] = useState(0);
    const [prevLoadedImg, setPrevLoadedImg] = useState([])

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const fileonChange = async (e) => {
        const form = new FormData();
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        setParcent(70)
        form.append('image', file);
        await uploadImage(form).unwrap();
    };

    useEffect(() => {
        if (parcent == 100) {
            setTimeout(() => {
                setParcent(0)
            }, 500)
        }
    }, [parcent])

    useEffect(() => {
        if (isSuccess) {
            setImages((prevImgs) => [...prevImgs, data?.url])
            setPrevLoadedImg(alreadyLoaded => {
                
                return [{ id: crypto.randomUUID(), image: data?.url }, ...alreadyLoaded]
            })
            setParcent(100)
        }
        if (isError) {
            toast.error(error?.data?.error || 'Upload failed, try again');
            setParcent(0);
            if (error.status == 401) {
                router.push('/xyz/admin/login')
            }
        }
    }, [isSuccess, isError, data, error, router, setImages, setPrevLoadedImg])

    return (
        <div >
            <div className='w-full h-40 border-2 border-dotted flex flex-col items-center' onClick={showModal}>
                <div className='flex flex-row items-center gap-x-5'>
                    {
                        images && images?.map((image, indx) => {
                            return <Image key={indx + image} src={image} height={500} width={500} className="w-24 h-auto mx-auto mt-3" alt="project pic"></Image>
                        })
                    }
                </div>
                <p className='text-center text-black'>Upload Photo</p>
            </div>

            <Modal width={800} title="Upload photo" cancelButtonProps={{ style: { display: 'none' } }} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText='Save'>
                <div className='p-5'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5'>
                        {
                            images && images?.map((image, indx) => {
                                return <Image key={indx + image} src={image} height={500} width={500} className="w-24 h-auto mx-auto mt-3" alt="project pic"></Image>
                            })
                        }
                        <label className='border-2 border-dashed h-auto min-h-40 w-full bg-slate-50 border-gray-300 flex justify-center items-center relative'>
                            <MdOutlineCloudUpload className='text-6xl' />
                            <input accept='image/*' type="file" multiple={false} onChange={fileonChange} className='hidden' />
                            {
                                parcent > 0 && <div className='absolute top-0 left-0 w-full h-full bg-white opacity-90 flex justify-center items-center'>
                                    <Progress percent={parcent} type="line" />
                                </div>
                            }
                        </label>
                    </div>
                    <h2 className='text-lg text-black mt-16 mb-5'>Recenet uploaded images</h2>

                    <DraftImages images={images} setImages={setImages} prevLoadedImg={prevLoadedImg} setPrevLoadedImg={setPrevLoadedImg} />

                </div>

            </Modal>
        </div>
    )
})

PhotoUploader.displayName = 'PhotoUploader'
export default PhotoUploader