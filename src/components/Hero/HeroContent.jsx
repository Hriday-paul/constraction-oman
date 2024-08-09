export default function HeroContent() {
  return (
    <div className="text-white px-8 md:px-16 lg:px-0 capitalize flex flex-col w-full gap-3 md:gap-4 lg:gap-6 items-start">
      <h1 className="text-xl md:text-4xl pointer-events-auto lg:text-6xl font-semibold">
        QUALITY IS OUR FIRST <br />
        <span className="text-secondary leading-4">PRIORITY</span>
      </h1>

      <p className="text-sm  md:text-xl w-4/5 lg:w-3/5 pointer-events-auto line-clamp-2">
        OUR CONSISTENT PERFORMANCE AND IMPECCABLE SERVICE DELIVERY HAVE MADE US
      </p>

      <button className="bg-primary pointer-events-auto border-2 transition-all duration-200 border-primary hover:bg-[#036979] text-sm lg:text-lg px-2 py-1 md:px-3 md:py-2">
        More About Us
      </button>
    </div>
  );
}
