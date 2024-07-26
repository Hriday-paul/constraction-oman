
import SmallImage from './SmallImage'


export default async function ImageContainer({bestProjects:projectsPromise}) {
    const bestProjects = await projectsPromise;
    
    return (
        <div className=' lg:py-20 md:py-12 gap-4 grid lg:grid-cols-3 md:grid-cols-2  justify-center place-items-center '>
            <div className=' flex flex-col justify-center place-items-center h-full gap-3'>
                {
                    bestProjects?.map((project, indx) => {
                        return indx <= 3 && <SmallImage key={project?.id} id={project?.id} image={project?.images?.split(',')[0]} title={project?.name} details={project?.details}/>
                    })
                }
            </div>
            <div className=' flex flex-col justify-center place-items-center h-full lg:h-[calc(100%+10%)] gap-3'>
                {
                    bestProjects?.map((project, indx) => {
                        return (indx >= 4 && indx <= 5) && <SmallImage key={project?.id} id={project?.id} image={project?.images?.split(',')[0]} title={project?.name} details={project?.details}/>
                    })
                }
                
            </div>
            <div className=' grid col-span-2 lg:col-span-1 grid-cols-2 lg:grid-cols-1  justify-center place-items-center h-full gap-3'>
                {
                    bestProjects?.map((project, indx) => {
                        return (indx >= 6 && indx <= 8) && <SmallImage key={project?.id} id={project?.id} image={project?.images?.split(',')[0]} title={project?.name} details={project?.details}/>
                    })
                }
                
            </div>

        </div>
    )
}
