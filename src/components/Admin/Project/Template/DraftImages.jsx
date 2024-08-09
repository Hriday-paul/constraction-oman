import { useUploadedFilesQuery } from '@/Redux/Api/Api';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { ImSpinner8 } from 'react-icons/im';

const DraftImages = React.memo(({ images, setImages, prevLoadedImg, setPrevLoadedImg }) => {
    const [limit, setLimit] = useState(10);
    const { isLoading: filesLoading, isError: filesErr, data: files, isSuccess, error } = useUploadedFilesQuery({ limit }, { refetchOnMountOrArgChange: true });

    useEffect(() => {
        if (isSuccess) {
            setPrevLoadedImg(alreadyLoaded => [...alreadyLoaded, ...files])
        }
    }, [isSuccess])

    const setStateImages = (url) => {
        setImages(prevImgs => [...prevImgs, url])
    }

    return (
        <div>
            {
                filesLoading ?
                    <div className='flex justify-center items-center min-h-40'>
                        <ImSpinner8 className='text-2xl text-blue-500 animate-spin text-center' />
                    </div> : filesErr ?
                        <div>
                            <p className='text-lg text-center my-5'>Error found</p>
                        </div> :
                        <div>
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5'>
                                {
                                    prevLoadedImg && prevLoadedImg?.map((image, indx) => {
                                        return <img onClick={() => setStateImages(image?.image)} key={image?.id} src={image?.image} height={500} width={500} className="w-24 h-auto mx-auto mt-3" alt="project pic" />
                                    })
                                }
                            </div>

                            <div className='text-center mt-20'>
                                <button className="border-o outline-none bg-blue-500 hover:bg-blue-600 duration-200 text-white text-base py-3 px-8 mx-auto">
                                    Load more
                                </button>
                            </div>
                        </div>
            }
        </div>
    )
})

export default DraftImages;
