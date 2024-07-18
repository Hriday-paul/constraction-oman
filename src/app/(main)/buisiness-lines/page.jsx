import EmptyData from '@/components/Shared/EmptyData/EmptyData'
import TopSection from '@/components/Shared/TopSection/TopSection'
import React from 'react'

export default function page() {
    const routs = [
        {
            name: "/ business-lines",
            link: "/buisiness-lines",
        },
    ]
    return (
        <div>
            <TopSection title={'Business Lines'} routs={routs} />
            <div className='max-w-7xl mx-auto p-4'>
                <EmptyData />
            </div>
        </div>
    )
}
