import TopSection from "@/components/Shared/TopSection/TopSection";

const layout = ({ children }) => {
    const routs = [
        {
            name: "/ projects",
            link: "/projects",
        },
        {
            name: " / category",
            link: "#",
        },
    ]
    return (
        <div>
            <TopSection title={'Projects'} routs={routs} />
            card
            <div className="max-w-7xl mx-auto px-4">
                {children}
            </div>

           
        </div>
    );
};

export default layout;