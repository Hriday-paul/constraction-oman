'use client'
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideImageTwo from "@/images/slide/slide-1.webp";
import SlideImageThree from "@/images/slide/slide-2.webp";
import SlideImageFour from "@/images/slide/slide-3.webp";
import SlideImageOne from "@/images/slide/slide-4.webp";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";


export default function Slider() {
  const images = [SlideImageOne, SlideImageTwo, SlideImageThree, SlideImageFour];
  return (<div className=" absolute left-0 top-0 w-full h-full md:h-full" >
    <Swiper
      navigation={true}
      modules={[Autoplay, Navigation, FreeMode]}
      autoplay={{ delay: 4050 }}
      slidesPerView={1}
      loop={true}
      className=" absolute pointer-events-auto top-0 left-0 h-full w-full "
      onClick={()=>console.log("it's workd")}
    >
      {images.map((imageSrc, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
            height={500}
            width={1000}
              src={imageSrc}
              className="brightness-50 w-full h-80 md:h-[400px] md:w-full lg:h-[600px] xl:h-[600px] object-cover select-none"
              alt="nanto slider image"
            />
          </SwiperSlide>
        );
      })}
    </Swiper></div>
  );
}
