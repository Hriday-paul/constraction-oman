import HeroContent from "./HeroContent";
import NextSlider from "./NextSlider";
import Image from "next/image";

const images = [
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/slide/slide-1.webp",
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/slide/slide-2.webp",
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/slide/slide-3.webp",
  "https://raw.githubusercontent.com/ansanonymo/nanco/master/src/asset/slide/slide-4.webp",
];

export default async function Hero({slideInfo}) {
  const sliders = await slideInfo;
  // console.log(sliders?.sliderImgs)

  return (
    <div className=" relative h-[350px] md:h-[450px] lg:h-[500px] xl:h-[550px] flex flex-col">
      <div className="h-full">
        <NextSlider images={sliders?.sliderImgs} />
      </div>
      <div className="absolute mt-6 md:mt-0 left-1/2 -translate-x-1/2  z-10 flex h-full justify-center container pointer-events-none  pr-11 items-center ">
        <HeroContent />
      </div>
    </div>
  );
}
