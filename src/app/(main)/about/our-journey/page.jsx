import TopSection from '@/components/Shared/TopSection/TopSection';
import UseGet_Sort_date_projects from '@/Hooks/UseGet_Sort_date_projects';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoFootstepsOutline } from 'react-icons/io5';


const breadCrumbData = [{ name: 'home', link: '/' }, { name: ' / about', link: '/about' }, { name: " / our journey", rout: "/" }];

export const metadata = {
    title: 'Nanco | our journey',
    description: 'Our Consistent Performance and Impeccable Service Delivery have made us .',
}


const OurJourney = async () => {
    const projects = await UseGet_Sort_date_projects();

    return (
        <div>
            <TopSection title={"Our Journey"} routs={breadCrumbData} />
            <div className='pb-20 pt-10 overflow-x-hidden'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className="my-10 lg:my-14 xl:my-16 w-11/12 md:w-5/6 lg:w-3/5 mx-auto">
                        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black uppercase">Our story of growing up</h2>
                        <p className="text-sm md:text-base xl:text-lg font-medium text-gray-700 mt-4 xl:mt-6 leading-6 xl:leading-7">Our Consistent Performance and Impeccable Service Delivery have made us .</p>
                    </div>
                    <div className="my-6">
                        <ul className="relative flex flex-col gap-9 py-5">
                            {projects.map((project, index) => {
                                return (
                                    <TimeLineProject
                                        key={project?.id}
                                        heading={project?.name}
                                        description={project?.details}
                                        img={project?.images?.split(',')[0]}
                                        years={moment(project?.start_date).format('MMM Do YY') + ' - ' + moment(project?.end_date).format('MMM Do YY')}
                                        id={project?.id}
                                        indx={index}
                                    />
                                );
                            })}

                            {/** middle line */}
                            <li className="hidden lg:block absolute w-[2px] h-full bg-[#E4E4E4] top-0 left-1/2 translate-x-1/2"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurJourney;


function TimeLineProject({ heading, description, img, years, id, indx }) {
    return (
        <li className="md:odd:text-right group">
            <div data-aos={indx % 2 == 0 ? 'fade-right' : 'fade-left'}>
                <div className="flex flex-col md:group-odd:items-end md:group-even:items-start w-fit md:mx-auto lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2 lg:relative lg:group-even:left-11 lg:group-odd:right-11" >
                    {/** image */}
                    <Link href={`/projects/details/${id}`} className="min-w-52 aspect-[301/201]  w-7/12 md:w-64 lg:w-80 mb-7 relative overflow-hidden">
                        <Image
                            src={img}
                            alt={heading}
                            width={1000}
                            height={1000}
                            className="w-full h-auto object-cover hover:scale-110 duration-200"
                        />
                    </Link>

                    {/** content */}
                    <div className="flex flex-col gap-5 md:group-even:flex-row  md:group-odd:flex-row-reverse" >
                        {/** icon */}
                        <div className="h-fit relative">
                            <div
                                className="absolute hidden lg:block -z-50 top-1/2 h-[2px] bg-[#e4e4e4] -translate-y-1/2
              group-odd:w-[48px] group-odd:translate-x-full group-odd:right-0 group-even:left-0 group-even:-translate-x-full group-even:w-[44px]"
                            ></div>
                            <div className="size-20 text-6xl border relative flex items-center justify-center text-[#0c0a0a] shadow-lg">
                                <IoFootstepsOutline />
                            </div>
                        </div>

                        {/** text */}
                        <Link href={`/projects/details/${id}`} className="max-w-96 lg:max-w-80">
                            <h3 className="text-secondary font-semibold mb-2">{years}</h3>
                            <h2 className="text-[#0c0a0a] text-xl font-bold uppercase mb-4">
                                {heading}
                            </h2>
                            <p className="text-[#6e777d] line-clamp-3">{description}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
}