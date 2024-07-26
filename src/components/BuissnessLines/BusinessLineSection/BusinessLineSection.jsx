import React from "react";
import { BiSolidSchool } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import UpperSection from "./UpperSection";

export default function BusinessLineSection({ subRouts }) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row gap-5 my-8">

      {
        subRouts?.map((tab, indx) => {
          return <UpperSection
            rout={tab?.rout}
            icon={tab?.icon}
            text={tab?.name}
            key={crypto.randomUUID()}
            isRed={indx % 2 != 0}
          />
        })
      }
    </div>
  );
}

