import Image from "next/image";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
// import mdImage from "./../../../asset/About/md.jpg";

export default function MdMassage({ isMd = false, image, who, quotes }) {
  return (
    <div
      className={`  ${
        isMd ? "lg:grid-cols-[60%,40%]" : "lg:grid-cols-[40%,60%]"
      }  grid  grid-cols-1 justify-center`}
    >
      <div
        className={`imageBox ${
          isMd ? "lg:order-1" : ""
        } w-full relative h-full flex justify-center place-items-center `}
      >
        <div className="shade absolute border-[8px] border-l-secondary border-r-white border-b-white border-t-secondary w-[60%] h-[60%] rounded-md -z-10 top-5 left-8"></div>
        <div className="shade absolute border-[8px] border-l-white border-r-primary border-b-primary border-t-white w-[60%] h-[60%] rounded-md -z-10 bottom-5 right-8"></div>
        <Image
          src={image}
          alt={`${who} image`}
          className=" w-[70%] h-[80%]  object-cover rounded-md"
        />
      </div>
      <div className={`textBox w-full `}>
        <div className="pt-12 w-full">
          <h1 className="lg:text-5xl md:text-3xl text-2xl -order-1 font-bold text-primary lg:pb-14 md:pb-7">
            What Our {who} Says..
          </h1>
          <div className=" text-2xl lg:flex w-full">
            <span className=" text-5xl mb-14 px-2 -translate-y-7 text-secondary">
              <ImQuotesLeft />
            </span>
            <span className="text-xl w-full ">{quotes}</span>
          </div>
          <div className=" p-5">
            <button className=" px-8 py-3 text-xl hover:bg-orange-800 bg-secondary text-white font-semibold rounded-md flex place-items-center gap-3">
              Contact {who} <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
