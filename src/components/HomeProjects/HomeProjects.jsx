import React, { Suspense } from "react";
import Title from "../Shared/Title/Title";
import ImageContainer from "./ImageContainer";
import UseGetHomeProjects from "@/Hooks/Home/UseGetHomeProjects";

export default function HomeProjects() {
  const bestProjects = UseGetHomeProjects();

  return (
    <div className=" w-full overflow-x-hidden">
      <div className="container overflow-x-hidden">

        <div className="mt-10 md:mt-16 lg:mt-24 gap-2 ">
          <h1 className="uppercase text-center text-2xl md:text-3xl lg:text-4xl text-muted flex flex-col justify-center items-center font-semibold">
            <span className="text-gray-900">OUR BEST PROJECTS</span>
          </h1>
          <p className="text-sm lg:text-base text-center pb-12 text-darkShade w-4/5 lg:w-3/5 mx-auto mt-3">Cras varius purus in tempus porttitor ut dapibus efficitur sagittis cras vitae lacus metus nunc vulputate facilisis nisi
            eu lobortis erat consequat ut. Aliquam et justo ante. Nam a cursus velit</p>
        </div>

        <Suspense fallback={'loading....'}>
          <ImageContainer bestProjects={bestProjects} />
        </Suspense>
      </div>
    </div>
  );
}
