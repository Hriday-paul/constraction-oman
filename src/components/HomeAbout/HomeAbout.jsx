
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import bg from "@/images/About/bg.png";
import girlIamge from "@/images/About/girl.png";
import Image from "next/image";

export default function HomeAbout() {
  return (
    <div
      className="my-14 w-full mx-auto relative bg-primary bg-cover bg-[url('https://raw.githubusercontent.com/Hriday-paul/constraction-oman/main/src/images/About/bg.png?token=GHSAT0AAAAAACU7ZO2D42CIHNR4S7YIGJAAZVA5GQA')]"
    >
      <div className="container  flex flex-col lg:flex-row lg:justify-between md:justify-between justify-center lg:place-items-end md:place-items-end">
        <div className="textBox lg:py-20 md:py-20 py-10 w-full">
          <h1 className=" text-4xl lg:text-6xl md:text-5xl font-bold text-white py-5 ">
            {"Let's bulid something great together!"}
          </h1>
          <p className="text-xl text-white pb-10">
            {"Don't wait any longer to bring your construction dreams to life. Partner with Builtup and experience unparalleled service and quality."}
          </p>
          <div className="">
            <button className="flex place-items-center gap-3 lg:px-12 relative lg:py-6 px-7 py-4 text-xl rounded-lg bg-transparent overflow-hidden hover:outline  after:-z-[1] z-10 transition-all duration-1000 after:hover:w-0 after:transition-all hover:outline-white after:duration-1000 after:hover:opacity-0 after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-secondary after:border-secondary after:border-2 text-white ">
              Get Free Qutes <FaRegArrowAltCircleRight />{" "}
            </button>
          </div>
        </div>
        <div className="imageBox  hidden lg:flex h-full justify-center lg:justify-end relative w-[100%] ">
          <Image height={800} width={800} src={girlIamge} alt="nanco about man" className="h-80 md:h-[400px] lg:h-[460px] w-auto -mb-5" />
        </div>
      </div>
    </div>
  );
}
