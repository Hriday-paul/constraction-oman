import Project from "@/components/BuissnessLines/Project";
import UseGetEngineeringProjects from "@/Hooks/BusinessLines/UseGetEngineeringProjects";


export default async function prestigiusProjects() {
  const projects = await UseGetEngineeringProjects();

  return (
    <div className="max-w-7xl mx-auto">
      <div className='grid-cols-1 grid gap-y-8 gap-x-0 md:gap-8 justify-center place-items-center pt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {
          projects?.map((projectInfo) => {
            return <Project
              key={projectInfo?.name+projectInfo?.id}
              image={projectInfo?.images.split(',')[0]}
              title={projectInfo?.name}
              date={projectInfo?.end_date}
              desc={projectInfo?.details}
              id={projectInfo?.id}
            />
          })
        }
      </div>
    </div>
  )
}
