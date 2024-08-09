import EngineeringConstruction from "@/components/Projects/EngineeringConstruction";
import EmptyData from "@/components/Shared/EmptyData/EmptyData";
import ProjectCardLoading from "@/components/Shared/Loading/ProjectCardLoading";
import TopSection from "@/components/Shared/TopSection/TopSection";
import UseGetProjectsByFilter from "@/Hooks/Projects/UseGetProjectsByFilter";
import UseSectorsByCategory from "@/Hooks/UseSectorsByCategory";
import Link from "next/link";
import { Suspense } from "react";


export default async function page({ searchParams }) {

  const categoryId = searchParams.category == 'engineering-constraction' ? 1 : searchParams.category == 'water-proof-flooring-facilities' ? 2 : searchParams.category == 'mepi' ? 3 : 0;

  const title = categoryId == 1 ? 'Engineering & constraction' : categoryId == 2 ? 'water proof & FF' : categoryId == 3 ? 'mepi' : 'not found';

  const routs = [
    {
      name: " / home",
      link: "/",
    },
    {
      name: ` / ` + searchParams.category,
      link: "/",
    },
  ]

  const sectors = await UseSectorsByCategory({ category_id: categoryId });
  const projects = UseGetProjectsByFilter({ category_id: categoryId, sector_id: searchParams?.sector, search: searchParams?.search })

  return (
    <div className="">
      <TopSection title={title} routs={routs} />

      <div className='max-w-7xl mx-auto px-4 my-8 pb-16 pt-8'>
        <div className='grid grid-cols-1 lg:grid-cols-6'>
          <div className='lg:col-span-4 flex flex-row gap-3 items-center flex-wrap'>
            <Link href={`/projects?category=${searchParams?.category}`} scroll={false} className={`p-2 border min-w-16 rounded ${searchParams?.sector ? '' : 'bg-secondary text-white'}`}>
              <p className='text-sm text-center'>All</p>
            </Link>
            {
              sectors?.map((sector) => {
                return <Link href={`/projects?category=${searchParams?.category}&sector=${sector?.id}`} scroll={false} key={sector?.id} className={`p-2 border rounded ${searchParams?.sector == sector?.id ? 'bg-secondary text-white' : ''}`}>
                  <p className='text-sm'>{sector?.service_name}</p>
                </Link>
              })
            }
          </div>
          <div className='lg:col-span-2'>
            {/* <input type="text" className='border' /> */}
          </div>
        </div>
        <div>
          <Suspense fallback={<ProjectCardLoading />}>
            <EngineeringConstruction projects={projects} />
          </Suspense>
        </div>
      </div>

    </div>
  )
}
