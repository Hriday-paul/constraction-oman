"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NextSlider({ images }) {
  return (
    <Swiper
      navigation={true}
      autoplay={true}
      loop={true}
      modules={[Autoplay, Navigation]}
      className="h-full w-full"
    >
      {images.map((imageSrc, index) => {
        return (
          <SwiperSlide
            onClick={() => {
              console.log("clicked");
            }}
            key={index}
          >
            <img
              src={imageSrc}
              className="brightness-50 h-full w-full min-h-[600px] object-cover select-none"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
