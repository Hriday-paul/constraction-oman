
import ChairmanImage from "@/images/tom_eating.jpg";
import Slider from "./Slider";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative -z-20 flex flex-col">
      <Slider />
     
      <div className="relative py-24 z-10 flex h-full justify-center lg:justify-between lg:flex-row container flex-col pr-11 items-center ">
        {/* //text */}
        <HeroContent />
        {/* // img */}
        <ImageCard imageSrc={ChairmanImage} />
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="text-white capitalize flex flex-col gap-3 lg:gap-6 items-start pointer-events-none">
      <h1 className="text-2xl pointer-events-auto md:text-4xl lg:text-6xl font-semibold cursor-text">
        Affordable roofing repair <br />
        <span className="text-secondary">services</span>
      </h1>

      <p className="text-sm w-4/5 pointer-events-auto md:text-lg lg:text-xl cursor-text">
        OUR CONSISTENT PERFORMANCE AND IMPECCABLE SERVICE DELIVERY HAVE MADE US
      </p>

      <button className="bg-primary pointer-events-auto border-2 transition-all duration-200 border-primary hover:text-white hover:border-primary hover:bg-transparent text-sm md:text-lg px-3 py-2 cursor-text">
        More About Us
      </button>
    </div>
  );
}

function ImageCard({ imageSrc }) {
  return (
    <div className="hidden lg:flex pointer-events-auto relative translate-y-20 lg:translate-y-56 self-end  w-full max-w-[250px] text-white gap-4  bg-primary rounded-lg flex-col items-center pb-8">
      <div className="absolute top-0 translate-y-[-50%] h-40 w-40 rounded-full overflow-hidden border-4 border-primary ">
        <Image height={500} width={500} className="w-full h-auto" src={imageSrc} alt="chairman image" />
      </div>

      {/* imageplace holder */}
      <div className="h-20 w-40 rounded-full overflow-hidden border-4 border-primary "></div>

      <h1 className="text-xl text-center">
        Read What <br /> chairman talk <br /> about us ?
      </h1>
      <button className="border-2 border-secondary hover:bg-transparent hover:text-secondary text-xl bg-secondary px-4 py-1 rounded-lg">
        Read
      </button>
    </div>
  );
}
