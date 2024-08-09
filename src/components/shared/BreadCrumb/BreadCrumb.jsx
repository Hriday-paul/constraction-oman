import React from "react";
import BreadCrumbLine from "./BreadCrumbLine";

export default function BreadCrumb({ path, title, pageName }) {
  const fullPath = path.map(({ name, link }, index) => {
    return index !== path.length - 1 ? (
      <a key={crypto.randomUUID()} href={link} className="text-white">
        {name}
      </a>
    ) : (
      <React.Fragment key={crypto.randomUUID}>{name}</React.Fragment>
    );
  });

  return (
    <div className="container gap-10  bg-no-repeat  flex flex-col lg:flex-row lg:justify-between lg:gap-0 items-center">
      <div>
        <h1 className="md:text-5xl lg:text-6xl text-4xl font-semibold text-white capitalize">
          {pageName ? pageName : "Please Give Page Name"}
        </h1>

        <div className="bg-transparent hidden w-80 h-[90px] text-lg lg:flex flex-col gap-6 mt-7">
          <BreadCrumbLine />

          
        </div>
      </div>
      <div className="text-secondary relative">
        <div className="w-[30px] hidden lg:block aspect-square absolute bg-white right-0 top-0 -translate-y-20">
          <div className="w-full h-full bg-secondary -translate-x-1/3 -translate-y-1/3"></div>
        </div>
        {fullPath}
      </div>
    </div>
  );
}
