import OurDirectors from "@/components/People/OurDirectors";
import TopSection from "@/components/Shared/TopSection/TopSection";
import UseGetDirectors_pManagers from "@/Hooks/UseGetDirectors_pManagers";


export const metadata = {
    title: 'Nanco | directors',
    description: 'Explore our all directors.',
}

const routs = [
    {
        name: "home",
        link: "/home",
    },
    {
        name: " / board of directors",
        link: "/",
    },
];

export default async function page() {
    const peoples = await UseGetDirectors_pManagers();

    return (
        <div>
            <TopSection title={'Board of Directors'} routs={routs} />
            <div className="bg-slate-50 py-10">
                <div className="max-w-7xl mx-auto px-4">
                    <OurDirectors peoples={peoples} />
                </div>
            </div>
        </div>
    )
}
