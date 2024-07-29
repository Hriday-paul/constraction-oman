import React from 'react'
import { FaFacebookF, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosArrowRoundForward, IoIosMail } from "react-icons/io";
export default function Details({ contactInfo }) {
    return (
        <div className='w-full max-w-7xl mx-auto px-4'>
            <div className="">
                <h2 className="title uppercase text-center lg:text-4xl md:text-3xl text-2xl font-semibold text-slate-800">
                    WE ARE IN <span className='uppercase'>{contactInfo?.country}</span>
                </h2>
                <div className="conta flex flex-col md:flex-row gap-8 lg:flex-row justify-around py-14 place-items-center">
                    <div className="box flex flex-col justify-center place-items-center">
                        <div className="icon text-4xl text-secondary pb-5">
                            <FaLocationDot />
                        </div>
                        <div className="desc text-center">
                            {contactInfo?.head_office && <p className='text-slate-500 capitalize'>{contactInfo?.head_office}</p>}
                            {contactInfo?.address && <p className='text-slate-500'>{contactInfo?.address}</p>}
                            {contactInfo?.post_code && <p className='text-slate-500'>Postal code : {contactInfo?.post_code}</p>}
                            <p className='text-sm flex place-items-center gap-2 text-secondary justify-center'>Map <IoIosArrowRoundForward /></p>
                        </div>
                    </div>
                    <div className="box flex flex-col justify-center place-items-center">
                        <div className="icon text-4xl text-secondary pb-5">
                            <FaPhone />
                        </div>
                        <div className="desc text-center">
                            {contactInfo?.toll_free && <p className='text-slate-500'>Toll freee : {contactInfo?.toll_free}</p>}
                            {contactInfo?.telephone && <p className='text-slate-500'>Telephone : + {contactInfo?.telephone}</p>}
                            {contactInfo?.fax && <p className='text-slate-500'>Fax : + {contactInfo?.fax}</p>}
                            <p className='text-sm flex place-items-center gap-2 text-secondary justify-center'>Map <IoIosArrowRoundForward /></p>
                        </div>
                    </div>
                    <div className="box flex flex-col justify-center place-items-center">
                        <div className="icon text-4xl text-secondary pb-5">
                            <IoIosMail />
                        </div>
                        <div className="desc text-center">
                            {contactInfo?.company && <p className='text-slate-500 capitalize'>{contactInfo?.company}</p>}
                            {contactInfo?.email && <p className='text-slate-500'>{contactInfo?.email}</p>}
                            <p className='text-sm flex place-items-center gap-2 text-secondary justify-center'>Map <IoIosArrowRoundForward /></p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="social p-5 flex w-full justify-center place-items-center gap-10 text-slate-500 ">
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaYoutube /></a>
                </div>
            </div>
        </div>
    )
}
