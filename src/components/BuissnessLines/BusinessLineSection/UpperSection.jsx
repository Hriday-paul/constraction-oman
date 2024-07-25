import Link from "next/link";
import React from "react";
export default function UpperSection({ icon, text, isRed, rout }) {
  return (

      <Link href={rout} 
        className={`w-full min-w-12 p-3 md:p-0 lg:p-5 xl:p-8 cursor-pointer  rounded-md ${!isRed ? "bg-primary" : "bg-secondary"
          } relative overflow-hidden`}
      >
        <div className="shade  flex justify-center translate-x-28  text-[100px] scale-150 opacity-30">
          {icon}
        </div>
        <div className="absolute flex w-full top-0 left-0 h-full justify-center place-items-center">
          <div className="title text-white text-xl ">{text}</div>
        </div>
      </Link>

  );
}
