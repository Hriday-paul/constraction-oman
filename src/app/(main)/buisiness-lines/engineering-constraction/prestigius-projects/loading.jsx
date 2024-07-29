import ProjectCardLoading from "@/components/Shared/Loading/ProjectCardLoading";


export default function loading() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className='grid-cols-1 grid gap-y-8 gap-x-0 md:gap-8 justify-center place-items-center pt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                <ProjectCardLoading />
                <ProjectCardLoading />
                <ProjectCardLoading />
            </div>
        </div>
    )
}
