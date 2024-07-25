import TopSection from "@/components/Shared/TopSection/TopSection";
import UseGetChairmanMsg from "@/Hooks/UseGetChairmanMsg";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";

const breadCrumbData = [{ name: 'home', link: '/' },{ name: ' / about', link: '/about' }, { name: ' / chairmen message', rout: "chairmen-msg" }]


export async function generateMetadata() {
    const chaiman = await UseGetChairmanMsg('chairman');
    const chaimanInfo = chaiman[0];
    return {
        title: 'Nanco | about | chairman messages',
        description: chaimanInfo?.message,
    }
}


const page = async () => {
    const chaiman = await UseGetChairmanMsg('chairman');
    const chaimanInfo = chaiman[0];
    return (
        <div>
            <TopSection title={"Chairmen's"} routs={breadCrumbData} />

            <div className="w-full mx-auto">
                <div className="container flex justify-center flex-col">
                    <MessageContainer
                        photo={chaimanInfo?.image}
                        who={"Chairman"}
                        quotes={
                            chaimanInfo?.message
                        }
                        email={chaimanInfo.email}
                    />
                </div>
            </div>
        </div>
    );
};

export default page;

const MessageContainer = ({ isMd = false, photo, who, quotes, email }) => {
    console.log(photo)
    return (
        <div
            className={`  ${isMd
                ? "lg:grid-cols-[60%,40%]"
                : "lg:grid-cols-[40%,60%]"
                }  grid  grid-cols-1 justify-center `}
        >
            <div
                className={`imageBox ${isMd ? "lg:order-1" : ""
                    } w-80 lg:w-96 relative h-80 lg:h-96 flex justify-center place-items-center mx-auto`}
            >
                <div className="shade absolute border-[8px] border-l-secondary border-r-white border-b-white border-t-secondary w-[60%] h-[60%] rounded-md -z-10 top-5 left-8"></div>
                <div className="shade absolute border-[8px] border-l-white border-r-primary border-b-primary border-t-white w-[60%] h-[60%] rounded-md -z-10 bottom-5 right-8"></div>
                <Image
                    src={photo}
                    height={500}
                    width={500}
                    alt="chairman's photo"
                    className=" w-[70%] h-[80%]  object-cover rounded-md"
                />
            </div>
            <div className={`textBox w-full `}>
                <div className="pt-12 w-full">
                    <h1 className="lg:text-5xl md:text-3xl text-2xl -order-1 font-bold text-primary lg:pb-14 md:pb-7">
                        What Our {who} Says..
                    </h1>
                    <div className="lg:flex w-full -mt-8 md:-mt-10 lg:-mt-0">
                        <span className="text-5xl mb-14 px-2 -translate-y-7 text-secondary">
                            <ImQuotesLeft />
                        </span>
                        <span className="text-xl w-full ">{quotes} </span>
                    </div>
                    <div className=" p-5">
                        <a href={`mailto:${email}`} className="inline-block">
                            <button className=" px-8 py-3 text-xl hover:bg-orange-800 bg-secondary text-white font-semibold rounded-md flex place-items-center gap-3">
                                Contact {who} <FaRegArrowAltCircleRight />
                            </button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}