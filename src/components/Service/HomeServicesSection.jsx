import { LiaCitySolid } from "react-icons/lia";
import Title from "../Shared/Title/Title";
import Link from "next/link";
import { GiWaterfall } from "react-icons/gi";
import { RiGovernmentLine } from "react-icons/ri";

export default function HomeServicesSection() {
  return (
    <>
      <div className=" pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Title>What we build</Title>
          <div className="my-5 w-fit mx-auto md:grid md:grid-cols-2 md:my-0 md:gap-9 lg:flex">
            <Card link='/projects/engineering-constraction'>Construction and Engineering</Card>
            <Card link='/projects/integrated-facilities-management-oman' Icon={<GiWaterfall />}>Water proof & Flooring facilities</Card>
            <Card link='/projects/mepi' Icon={<RiGovernmentLine />}>MEPI</Card>
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ children, Icon, link }) {
  return (
    <Link href={link} className="relative self-start my-9 md:my-0 mx-auto md:mr-auto md:mx-0 w-80 md:w-72 aspect-square flex flex-col gap-3 border justify-center items-start py-20 px-8 rounded border-gray-300 overflow-hidden group">
      <span className="text-7xl group-hover:scale-95 duration-700 text-secondary self-start">
        {Icon ? Icon : <LiaCitySolid />}
      </span>
      <span className="border-t border-gray-300 w-full my-3"></span>
      <h2 className="text-black font-medium text-xl  md:text-2xl duration-500">
        {children ? children : "Please write some content"}
      </h2>
      <div className="group-hover:scale-100 scale-0 transition-all duration-700 w-[400%] translate-x-1/2 translate-y-1/2 aspect-square absolute bottom-0 right-0 bg-gray-100 -z-10 rounded-full"></div>
    </Link>
  );
}
