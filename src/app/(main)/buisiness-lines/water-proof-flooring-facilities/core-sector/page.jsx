import EmptyData from "@/components/Shared/EmptyData/EmptyData";
import UseSectorsByCategory from "@/Hooks/UseSectorsByCategory";
import Image from "next/image";



export const metadata = {
    title: 'Nanco | business-lines | integrated facilities management oman | sectors',
    description: 'Our sectors in integrated facilities management on business lines.',
}

export default async function page() {
    const sectors = await UseSectorsByCategory({ category_id: 2 });

    return (
        <div >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>


                {
                    sectors?.map(sector => {
                        return <div key={sector?.id} className='w-full cursor-pointer relative transition-all duration-500 py-6 flex gap-4 flex-col group overflow-hidden rounded-md justify-center place-items-center bg-white border'>
                            {/* <div className="shade absolute w-[2%]  rotate-12 h-[200%] -translate-x-6 blur-sm group-hover:translate-x-[500px] transition-all duration-500  shadow shadow-white bg-white -top-10 left-0"></div> */}
                            <div className="text-4xl flex justify-center p-2 rounded-md ">
                                <img src={sector?.icon} height={500} width={500} alt="core sector icon" className='w-10 h-auto group-hover:scale-110 transition-all duration-500 group-hover:drop-shadow-lg' />
                            </div>
                            <div className="title uppercase font-bold text-primary">
                                {sector?.service_name}
                            </div>
                        </div>
                    })
                }


            </div>
            {
                sectors?.length < 1 && <EmptyData />
            }
        </div>
    )
}
