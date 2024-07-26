"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./paginatio.module.css";


export default function ProjectCarousel({images}) {
  return (
    <div className="my-6">
      <Swiper
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{
          el: "#containerForBullets",
          type: "bullets",
          bulletClass: style["swiper-custom-bullet"],
          bulletActiveClass: style["swiper-custom-bullet-active"],
        }}
        modules={[Autoplay, Pagination]}
        className="h-full w-full"
      >
        {images?.map((imageSrc, index) => {
          return (
            <SwiperSlide
              onClick={() => {
                console.log("clicked");
              }}
              key={index+imageSrc}
            >
              <Image
                width={3000}
                height={3000}
                src={imageSrc}
                alt="project-image"
                className="w-full h-44 md:h-96 lg:h-[600px] object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className="w-full my-4 flex justify-center gap-2"
        id="containerForBullets"
      ></div>
    </div>
  );
}
