import React from "react";
import { FaArrowRight, FaMap } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { RiSmartphoneLine } from "react-icons/ri";

import Details from "./Details";
import Link from "next/link";

export default async function DetailsBox({contactInfo}) {
  const contactData = await contactInfo;
  
  return (
    <div className="bg-gray-900 border py-12 lg:py-0 w-full h-full flex flex-col justify-center place-items-center rounded-md">
      <div className="div flex flex-col gap-3">
        <Details
          icon={<RiSmartphoneLine />}
          title={"Troll Free Number"}
          info={contactData?.toll_free}
        />
        <Details
          icon={<MdOutlineMail />}
          title={"Send us an e-mail."}
          info={contactData?.email}
        />
        <Details
          icon={<LuClock3 />}
          title={"Working Hours"}
          info={"Mon - Sat: 9:00 - 19:00"}
        />
        <Details />
      </div>
      <div className=" p-5 flex gap-4  border-t place-items-center ">
        <div className="text-3xl text-slate-400">
          <FaMap />
        </div>
        <Link href='/contact' className="flex gap-2 place-items-center text-white text-xl font-bold group">
          Find Us on map <FaArrowRight className="group-hover:translate-x-2 duration-200"/>
        </Link>
      </div>
    </div>
  );
}
