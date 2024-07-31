import Image from "next/image";
import Link from "next/link";

export default function SmallImage({ image, title, details, id, big }) {
  return (
    <Link href={`/projects/details/${id}`}>
      {/* <div
        className={`w-full ${big?"lg:max-h-[40rem] max-h-full" :"lg:max-h-64  md:max-h-64"} max-h-64  h-full relative overflow-hidden rounded-xl  first:col-span-2 lg:first:col-span-1 group`}
      >
        <div className="textBox title flex justify-start px-0 md:px-0 absolute w-full transition h-full top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-100 duration-1000 z-10">
          <div className=" absolute bottom-3 md:bottom-5 lg:bottom-8 py-5 md:py-0 px-5 md:px-8">
            <h1 className="text-white font-semibold text-base md:text-lg lg:text-2xl">
              {title}
            </h1>
            <p className="text-white text-xs lg:text-sm line-clamp-2 flex-shrink ">
              {details}
            </p>
          </div>
        </div>
        <Image
          src={image}
          height={0}
          width={5000}
          alt="nanco project image"
          className="group-hover:scale-110 duration-700 object-cover w-full h-full "
        />
      </div> */}
      <div
        className={`w-full ${big ? "lg:max-h-[40rem] max-h-full" : "lg:max-h-64  md:max-h-64"
          } max-h-64  h-full relative overflow-hidden rounded-xl  first:col-span-2 lg:first:col-span-1 group`}
      >
        <div className="textBox title flex justify-start lg:pl-8 absolute w-full transition h-full top-0 left-0 bg-gradient-to-b from-transparent to-black  opacity-0 hover:opacity-100 duration-1000 z-10">
          <div className=" absolute bottom-0 p-3 md:bottom-11 md:p-4 lg:bottom-11 lg:p-0 ">
            <h1 className="text-white font-semibold text-lg md:text-xl lg:text-2xl">
              {title}
            </h1>
            <p className="text-white text-sm md:text-sm lg:text-sm  line-clamp-2 flex-shrink ">
              {details}
            </p>
          </div>
        </div>
        <Image
          src={image}
          alt=""
          width={500}
          height={500}
          className="group-hover:scale-110 duration-700 object-cover w-full h-full "
        />
      </div>

    </Link>
  );
}
