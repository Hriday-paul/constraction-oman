import TopSection from "@/components/Shared/TopSection/TopSection"
import UseGetClients from "@/Hooks/UseGetClients"
import Image from "next/image";
import Link from "next/link";

const breadCrumbData = [{ name: 'home', link: '/' }, { name: ' / clients', rout: "/key-clients" }];

export const metadata = {
    title: 'Nanco | clients',
    description: 'We exist to help our clients and partners build their dreams. Below are just some of our valued customers, as well as what they have to say about working with us.',
}

export default async function page() {
    const clients = await UseGetClients();

    return (
        <div>
            <TopSection title={"Our Clients"} routs={breadCrumbData} />
            <div className="mx-auto max-w-7xl px-4 pt-10 pb-20">
                <div className="my-10 lg:my-14 xl:my-16 w-11/12 md:w-5/6 lg:w-3/5 mx-auto">
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">KEEPING GOOD COMPANY</h2>
                    <p className="text-sm md:text-base xl:text-lg font-medium text-gray-700 mt-4 xl:mt-6 leading-6 xl:leading-7">We exist to help our clients and partners build their dreams. Below are just some of our valued customers, as well as what they have to say about working with us</p>
                </div>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-[4px] relative border-white items-center">
                        <div className="absolute w-full h-full pointer-events-none border-white border-2 left-0 top-0"></div>
                        {clients.map((client) => {
                            return <ClientLogoImage src={client?.image} key={client.name + client.id} webUrl={client?.website_url}/>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


function ClientLogoImage({ src, webUrl }) {
    return (
        <div className="border w-full h-full flex items-center justify-center">
            <div className="size-56 md:size-80 justify-center items-center flex">
                <div className="relative cursor-pointer group overflow-hidden  h-ful w-full ">
                    <div className="relative w-full h-full duration-300 group-hover:-translate-y-[100%] flex justify-center item ">
                        <Link href={webUrl || '#'} className="w-full h-full justify-center items-center flex">
                            <img
                                src={src}
                                height={500}
                                width={500}
                                className="w-40 h-auto object-contain"
                                alt="nanco client logo"
                            />
                        </Link>
                        <Link href={webUrl || '#'}  className="absolute flex justify-center items-center w-full h-[100%]  top-[100%] left-0">
                            <img
                                src={src}
                                height={500}
                                width={500}
                                className="w-40 h-auto object-contain"
                                alt="nanco client logo"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
