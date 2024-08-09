
import LogoCaroselSection from "./LogoCaroselSection";
import style from "./logos.module.css";

const { slideanimation, parent: parentStyle } = style;

export default async function HomeDynamicClientsSection({ images: propImages }) {
  const images = await propImages;

  const displayImages = [...images];

  while (displayImages.length < 7) {
    displayImages.push(...images);
  }

  return (
    <div className="bg-[url('https://res.cloudinary.com/devlj6p7h/image/upload/v1723106816/test/poowwxyoncuqfvdfxuzs.png')] bg-cover mt-8">
      <div className="bg-slate-100 py-10 lg:py-16">
        
        <div className="mt-5 gap-2 ">
          <h1 className="uppercase text-center text-2xl md:text-3xl lg:text-4xl text-muted flex flex-col justify-center items-center font-semibold">
            <span className="text-gray-900">Our Parters</span>
          </h1>
          <p className="text-sm lg:text-base text-center pb-5 md:pb-8 lg:pb-12 text-darkShade w-4/5 lg:w-3/5 mx-auto mt-3">Cras varius purus in tempus porttitor ut dapibus efficitur sagittis cras vitae lacus metus nunc vulputate facilisis nisi
            eu lobortis erat consequat ut. Aliquam et justo ante. Nam a cursus velit</p>
        </div>
        {/* <h1 className="text-3xl font-bold text-center text-black">Our Parters</h1> */}
        <LogoCaroselSection images={displayImages} />
      </div>

    </div>
  );
}
