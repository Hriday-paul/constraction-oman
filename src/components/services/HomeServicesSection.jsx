import { LiaCitySolid } from "react-icons/lia";
import Title from "../shared/Title/Title";

export default function HomeServicesSection() {
  return (
    <div>
      <Title>Our Services</Title>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-3">
        <Card>Construction and Engineering</Card>
        <Card>Construction and Engineering</Card>
        <Card>Construction and Engineering</Card>
        <Card>Construction and Engineering</Card>
      </div>
    </div>
  );
}

function Card({ children, Icon }) {
  return (
    <div className="relative max-w-[300px] mx-auto flex flex-col gap-3 border justify-center items-center py-20 px-8 rounded-lg shadow-xl border-gray-200 overflow-hidden group">
      <span className="text-7xl text-secondary group-hover:text-white self-start duration-500">
        {Icon ? Icon : <LiaCitySolid />}
      </span>
      <h2 className="text-[#1B1A1A] group-hover:text-white text-2xl duration-500">
        {children ? children : "Please write some content"}
      </h2>
      <div className="group-hover:scale-100 scale-0 transition-all duration-500 w-[400%] translate-x-1/2 translate-y-1/2 aspect-square absolute bottom-0 right-0 bg-secondary -z-10 rounded-full"></div>
    </div>
  );
}
