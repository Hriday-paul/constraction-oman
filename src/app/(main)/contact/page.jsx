import Details from "@/components/Contact/Details";
import GoogleMap from "@/components/Contact/GooleMap";
import HomeContact from "@/components/HomeContact/HomeContact";
import TopSection from "@/components/Shared/TopSection/TopSection";
import UseGetContactInfo from "@/Hooks/UseGetContactInfo";

const routs = [
  {
    name: "home",
    link: "/home",
  },
  {
    name: " / contact",
    link: "/contact",
  },
];

export const metadata = {
  title: 'Nancco | contact',
  description: 'For more information and how we can meet your needs with nanco team.',
}

export default async function page() {
  const contactInfo = await UseGetContactInfo();

  return (
    <div className="">
      <TopSection title={'Contact us'} routs={routs} />
      <GoogleMap lat={contactInfo?.lat} lang={contactInfo?.longi} />
      <Details key={contactInfo?.id} contactInfo={contactInfo} />
      <HomeContact />
    </div>
  )
}
