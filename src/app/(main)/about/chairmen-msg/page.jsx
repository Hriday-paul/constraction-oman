import TopSection from "@/components/shared/TopSection/TopSection";
import UseGetChairmanMsg from "@/Hooks/UseGetChairmanMsg";

const breadCrumbData = [{name : 'About', rout : '/about'}, { name : 'Chairmen message', rout : "chairmen-msg"}]

const page = async() => {
    const chaimanInfo = await UseGetChairmanMsg('chairman');
    console.log(chaimanInfo);
    return (
        <div>
            <TopSection title={"Chairmen's message"} breadCrumbData={breadCrumbData}/>

            



        </div>
    );
};

export default page;