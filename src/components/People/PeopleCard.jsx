import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function PeopleCard({ image, name, title, links, email, phone, isDirector = false }) {

    return (
        <div className='w-80 lg:w-full lg:max-w-[300px] my-3 mx-auto lg:mx-0 overflow-hidden group  flex flex-col bg-white rounded border '>
            <div className="imgBox overflow-hidden relative h-[70%] min-h-56">
                <div className="shade z-20 flex opacity-0 transition-all duration-500 group-hover:opacity-100 justify-center place-items-center absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.3)]">
                    <div className="icons flex gap-5 transition-all duration-500 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        {
                            links?.map((item, indx) => {
                                return <Link href={item?.link} key={indx + item?.link} className='p-3 rounded-full transition-all duration-500 hover:bg-white hover:text-secondary border block text-white border-white'>{item.icon}</Link>
                            })
                        }
                    </div>
                </div>
                <Image height={500} width={500} src={image} alt="People image" className='w-full h-auto absolute group-hover:scale-110 transition-all duration-500 object-cover' />
            </div>
            <div className="textBox px-5 py-4">
                <h3 className="name text-xl pb-1 font-medium">{name}</h3>
                <h4 className="title text-sm mb-2 font-light">{title}</h4>
                {isDirector && <div className='flex flex-col '>
                    <a href={`tel:${phone}`} className="title text-sm text-secondary transition-all duration-300 hover:text-black cursor-pointer pb-1  ">{phone}</a>
                    <a href={`mailto:${email}`} className="title text-sm text-secondary transition-all duration-300 hover:text-black cursor-pointer">{email}</a>
                </div>}
            </div>
        </div>
    )
}
