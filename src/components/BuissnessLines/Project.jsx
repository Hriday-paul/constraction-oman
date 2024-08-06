import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import moment from 'moment'
export default function Project({ image, title, desc, date, id }) {
  return (
    <div>
      <Link href={`/projects/details/${id}`} className='flex flex-col cursor-pointer group relative min-h-36 min-w-full overflow-hidden transition-all duration-200 items-center gap-2 group border p-5'>
        <div className="overflow-hidden relative w-full h-full ">
          <Image src={image} alt="project-image" height={500} width={500} className='object-cover group-hover:scale-110 transition-all duration-300 h-44 w-full' />
          <div className="w-full translate-y-14 transition-all duration-500 group-hover:translate-y-0 px-5 py-2 absolute bottom-0 left-0 text-white bg-[rgba(0,0,0,0.4)] text-sm">
            {moment(date).format('YYYY-MM-DD')}
          </div>
        </div>
        <div className="w-full px-1.5 ">
          <div className="tite py-2 text-primary text-xl">
            <h5 className='text-secondary'>{title}</h5>
          </div>
          <p className='text-slate-900 text-sm line-clamp-2 flex-shrink'>{desc}</p>
          <p className=' text-secondary text-sm mt-3'>{'View more >>'}</p>
        </div>
      </Link>
    </div>
  )
}
