
import Image from "next/image";
import { BsTools } from "react-icons/bs";
import { TbToolsKitchen2 } from "react-icons/tb";

export default function HomeAbout() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full h-full gap-6 justify-between">
          <div className="imgBox w-full h-full relative overflow-hidden group min-h-72 lg:min-h-0 md:min-h-0">
            <div className="shade z-20 -rotate-45 absolute transition-all duration-1000 group-hover:translate-x-[50rem] group-hover:-translate-y-80 w-[30%] h-[200%] opacity-30 backdrop-blur-md shadow-lg shadow-white bg-white top-0 left-0 -translate-x-96"></div>
            <Image
              height={700}
              width={700}
              src='/about/truck.jpg'
              className=" absolute w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              alt="Truck Image"
            />
          </div>
          <div className="text w-full p-6">
            <div className="small text-secondary">About Us</div>
            <div className="heading lg:text-6xl text-3xl py-3 font-bold text-primary md:text-4xl">
              We Are Specialized Solutions Building
            </div>
            <div className="p lg:text-xl text-sm flex flex-col gap-1 py-5 text-darkShade font-normal">
              <p>Content Marketing Solutions: Engage, Inform, and Convert</p>
              <p>Content Marketing Solutions: Engage, Inform, and Convert</p>
            </div>
            <div className="icon flex flex-col gap-5">
              <IconBox
                icon={<BsTools />}
                title={"Smart Analytics"}
                desc={
                  "Content Marketing printing Solutions: Engage, Inform, and Convert"
                }
              />
              <IconBox
                icon={<TbToolsKitchen2 />}
                title={"Prestige Construction"}
                desc={
                  "Content Marketing printing Solutions: Engage, Inform, and Convert"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const IconBox = ({ icon, title, desc }) => {
  return (
    <div className='flex justify-start place-items-center group gap-4'>
      <div className="iconBox p-6 border  relative overflow-hidden flex justify-center place-items-center ">
        <div className="shade absolute z-0 transition-all duration-700  bg-secondary w-[100%] h-0 group-hover:h-[130%] bottom-0 left-0 rounded-tl-full rounded-tr-full">

        </div>
        <span className='text-3xl text-secondary transition-all duration-700 group-hover:scale-90 group-hover:text-white z-30 tex'>{icon}</span>
      </div>
      <div className="text">
        <h4 className="header lg:text-2xl md:text-xl text-base font-bold text-primary transition-all duration-700 hover:text-secondary">
          {title}
        </h4>
        <p className="desc lg:text-base md:text-base text-base text-darkShade">
          {desc}
        </p>
      </div>
    </div>
  )
}
