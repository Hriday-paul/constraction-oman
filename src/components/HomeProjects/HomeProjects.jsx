
import Title from "../shared/Title/Title";
import ImageContainer from "./ImageContainer";

export default function HomeProjects() {
  return (
    <div className="w-full">
      <div className="container">
        <Title>OUR BEST_PROJECTS</Title>
        <div className="text-sm lg:text-xl text-center pb-12 text-darkShade w-4/5 lg:w-3/5 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
        <ImageContainer />
      </div>
    </div>
  );
}
