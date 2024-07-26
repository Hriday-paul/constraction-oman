import EngineeringConstruction from '@/components/Projects/EngineeringConstruction';
import Loading from '@/components/Shared/Loading/Loading';
import TopSection from '@/components/Shared/TopSection/TopSection'
import UseGetProjectsByFilter from '@/Hooks/Projects/UseGetProjectsByFilter';
import UseSectorsByCategory from '@/Hooks/UseSectorsByCategory'
import Link from 'next/link'
import React, { Suspense } from 'react'

export default async function page({ searchParams }) {
    const sectors = await UseSectorsByCategory({ category_id: 1 });
    const projects = UseGetProjectsByFilter({ category_id: 1, sector: searchParams?.sector, search: searchParams?.search })
    const routs = [
        {
            name: " / home",
            link: "/",
        },
        {
            name: " / projects",
            link: "/projects",
        },
        {
            name: " / engineering-constraction",
            link: "/projects/engineering-constraction",
        },
    ]

    return (
        <div>
            <TopSection title={'Engineering & Constraction'} routs={routs} />
            <div className='max-w-7xl mx-auto px-4 my-8'>
                <div className='grid grid-cols-1 lg:grid-cols-6'>
                    <div className='lg:col-span-4 flex flex-row gap-3 items-center flex-wrap'>
                        <Link href={`/projects/engineering-constraction`} className={`p-2 border rounded ${searchParams?.sector ? '' : 'bg-secondary text-white'}`}>
                            <p className='text-sm'>All</p>
                        </Link>
                        {
                            sectors?.map((sector) => {
                                return <Link href={`/projects/engineering-constraction?sector=${sector?.id}`} key={sector?.id} className={`p-2 border rounded ${searchParams?.sector == sector?.id ? 'bg-secondary text-white' : ''}`}>
                                    <p className='text-sm'>{sector?.service_name}</p>
                                </Link>
                            })
                        }
                    </div>
                    <div className='lg:col-span-2'>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <Suspense fallback={<Loading />}>
                        <EngineeringConstruction projects={projects}/>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
