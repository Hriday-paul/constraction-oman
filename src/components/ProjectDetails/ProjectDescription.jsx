
import Image from "next/image";

export default function ProjectDescription({ data }) {
  return (
    <div className="mx-auto">
      <div className="w-full max-w-[900px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4">
          {data?.name}
        </h1>
        <p className="text-gray text-lg leading-7 my-10">{data?.details}</p>

        <div>
          <Image
            src={data?.images?.split(',')[0]}
            width={3000}
            height={3000}
            className="w-full h-full object-contain"
            alt="project image"
          />
        </div>
      </div>
    </div>
  );
}
