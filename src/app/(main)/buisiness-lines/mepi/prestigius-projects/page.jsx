import Project from "@/components/BuissnessLines/Project";
import EmptyData from "@/components/Shared/EmptyData/EmptyData";
import UseGetProjectsByCategory from "@/Hooks/BusinessLines/UseGetProjectsByCategory";


export const metadata = {
  title: 'Nanco | business-lines | integrated facilities management oman | projects',
  description: 'Our Best projects in integrated facilities management on business lines.',
}

export default async function prestigiusProjects() {
  const projects = await UseGetProjectsByCategory({ category: 3 });

  return (
    <div className="max-w-7xl mx-auto">
      <div className='grid-cols-1 grid gap-y-8 gap-x-0 md:gap-8 justify-center place-items-center pt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {
          projects?.map((projectInfo) => {
            return <Project
              key={projectInfo?.name + projectInfo?.id}
              image={projectInfo?.images.split(',')[0]}
              title={projectInfo?.name}
              date={projectInfo?.end_date}
              desc={projectInfo?.details}
              id={projectInfo?.id}
            />
          })
        }
      </div>
      {
        projects?.length < 1 && <EmptyData />
      }
    </div>
  )
}
