import BusinessLineSection from "@/components/BuissnessLines/BusinessLineSection/BusinessLineSection";
import TopSection from "@/components/Shared/TopSection/TopSection";
import { BiSolidSchool } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

export default function layout({ children }) {
    const routs = [
        {
            name: "home",
            link: "/",
        },
        {
            name: " / business-lines",
            link: "/buisiness-lines",
        },
        {
            name: " / engineering-constraction",
            link: "/engineering-constraction",
        },
    ]
    const subRouts = [
        {
            name : 'Prestigius Projects',
            rout : '/buisiness-lines/engineering-constraction/prestigius-projects',
            icon : <BiSolidSchool />
        },
        {
            name : 'Why Us',
            rout : '/buisiness-lines/engineering-constraction/why-us',
            icon : <FaRegHandshake />
        },
        {
            name : 'Core Sectors',
            rout : '/buisiness-lines/engineering-constraction/core-sector',
            icon : <IoSettingsOutline />
        },
    ]
    return (
        <div>
            <TopSection title={'Engineering & constraction'} routs={routs} />

            <div className="">
                <div className="max-w-7xl mx-auto px-4 pb-10">
                    <div>
                        <BusinessLineSection subRouts={subRouts}/>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>

            </div>

        </div>
    )
}
