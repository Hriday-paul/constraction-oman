import Project from "../BuissnessLines/Project";
import EmptyData from "../Shared/EmptyData/EmptyData";


export default async function EngineeringConstruction({ projects : ProjectList }) {
    const projects = await ProjectList;

    return (
        <div className="my-10">
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
