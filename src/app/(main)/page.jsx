import Hero from '@/components/Hero/Hero';
import HomeAbout from '@/components/HomeAbout/HomeAbout';
import HomeContact from '@/components/HomeContact/HomeContact';
import HomeDynamicClientsSection from '@/components/HomeDynamicClientsSection/HomeDynamicClientsSection';
import HomeProjects from '@/components/HomeProjects/HomeProjects';
import ProjectCouter from '@/components/ProjectCounter/ProjectCounter';
import HomeServicesSection from '@/components/Service/HomeServicesSection';
import Loading from '@/components/Shared/Loading/Loading';
import UseGetAllCategories from '@/Hooks/Home/UseGetAllCategories';
import UseHomeSection1 from '@/Hooks/Home/UseHomeSection1';
import UseGetClients from '@/Hooks/UseGetClients';
import UseGetContactInfo from '@/Hooks/UseGetContactInfo';
import React, { Suspense } from 'react';

const Home = async () => {
    const countInfo = UseHomeSection1();
    const clients = UseGetClients();
    const contactInfo = UseGetContactInfo();
    return (
        <>
            <Hero slideInfo={countInfo} />

            <Suspense fallback={<Loading />}>
                <ProjectCouter countInfo={countInfo} />
            </Suspense>

            <HomeServicesSection />

            <HomeAbout />

            <HomeProjects />

            <Suspense fallback={<Loading />}>
                <HomeDynamicClientsSection images={clients} />
            </Suspense>

            <Suspense fallback={<Loading />}>
                <HomeContact contactInfo={contactInfo} />
            </Suspense>

        </>
    );
};

export default Home;