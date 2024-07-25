import BusinessLineSection from "@/components/BuissnessLines/BusinessLineSection/BusinessLineSection";
import TopSection from "@/components/Shared/TopSection/TopSection";


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
    return (
        <div>
            <TopSection title={'Engineering & constraction'} routs={routs} />

            <div className="max-w-7xl mx-auto px-4">
                <div>
                    <BusinessLineSection />
                </div>
                <div>
                    {children}
                </div>
            </div>

        </div>
    )
}
