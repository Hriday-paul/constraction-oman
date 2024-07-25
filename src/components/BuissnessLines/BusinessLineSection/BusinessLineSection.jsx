import React from "react";
import { BiSolidSchool } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import UpperSection from "./UpperSection";

export default function BusinessLineSection() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row gap-5 my-8 ">

      <UpperSection
        rout={'/buisiness-lines/engineering-constraction/prestigius-projects'}
        icon={<BiSolidSchool />}
        text={"Prestigius Projects"}
        key={crypto.randomUUID()}
      />


      <UpperSection
        rout={'/buisiness-lines/engineering-constraction/why-us'}
        icon={<FaRegHandshake />}
        text={"Why Us"}
        key={crypto.randomUUID()}
        isRed={true}
      />
      <UpperSection
        rout={'/buisiness-lines/engineering-constraction/core-section'}
        icon={<IoSettingsOutline />}
        text={"Core Section"}
        key={crypto.randomUUID()}
      />
    </div>
  );
}

