
import { BsBuildings } from "react-icons/bs";
import { GiBrickWall } from "react-icons/gi";
import { PiProjectorScreenChart } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import Counter from "./Counter";

export default async function ProjectCouter({ countInfo }) {
  const countData = await countInfo;

  return (
    <div className="relative max-w-7xl px-4 mx-auto -translate-y-2/4 z-40">
      <div
        className="bg-[url('/gear.png')] min-w-52 w-[80%] bg-[#ff5e14] text-white bg-center bg-cover bg-no-repeat mx-auto px-3"
      >
        <div className="grid gap-3 sm:gap-x-16 md:gap-y-6 md:gap-x-12 lg:gap-16 py-4 sm:py-7 md:py-12 grid-cols-3 w-fit mx-auto">

          <CountSec count={countData?.totalClients} name="Clients" Icon={PiProjectorScreenChart} />
          <CountSec count={countData?.totalProjects} name="Projects" Icon={BsBuildings} />
          <CountSec count={countData?.totalMembars} name="Peoples" Icon={FaPeopleGroup} />

        </div>
      </div>
    </div>
  );
}


function CountSec({ Icon: PropsIcon, count, name }) {
  const Icon = PropsIcon ? PropsIcon : GiBrickWall;
  return (
    <div className="flex gap-2 sm:gap-2 md:gap-3 items-center">
      {/** icon */}
      <div className="text-xl md:text-5xl lg:text-6xl">
        {<Icon />}
      </div>
      {/** count and text */}
      <div>
        <h2 className="text-sm md:text-3xl lg:text-4xl font-bold">
          <Counter count={count} />
        </h2>
        <p className="text-xs md:text-lg lg:text-lg">{name}</p>
      </div>
    </div>
  );
}

