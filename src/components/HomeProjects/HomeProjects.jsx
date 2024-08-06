import React, { Suspense } from "react";
import Title from "../Shared/Title/Title";
import ImageContainer from "./ImageContainer";
import UseGetHomeProjects from "@/Hooks/Home/UseGetHomeProjects";

export default function HomeProjects() {
  const bestProjects = UseGetHomeProjects();

  return (
    <div className=" w-full overflow-x-hidden">
      <div className="container overflow-x-hidden">
        <Title>OUR BEST PROJECTS</Title>

        <div className="text-sm lg:text-xl text-center pb-12 text-darkShade w-4/5 lg:w-3/5 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>

        <Suspense fallback={'loading....'}>
          <ImageContainer bestProjects={bestProjects} />
        </Suspense>
      </div>
    </div>
  );
}
