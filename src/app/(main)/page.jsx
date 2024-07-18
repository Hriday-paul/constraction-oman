import Hero from '@/components/Hero/Hero';
import HomeAbout from '@/components/HomeAbout/HomeAbout';
import HomeClientsSection from '@/components/HomeClientsSection/HomeClientsSection';
import HomeContact from '@/components/HomeContact/HomeContact';
import HomeProjects from '@/components/HomeProjects/HomeProjects';
import ProjectCouter from '@/components/ProjectCounter/ProjectCounter';
import HomeServicesSection from '@/components/Service/HomeServicesSection';
import Loading from '@/components/Shared/Loading/Loading';
import TopSection from '@/components/Shared/TopSection/TopSection';
import UseGetAllCategories from '@/Hooks/Home/UseGetAllCategories';
import UseHomeSection1 from '@/Hooks/Home/UseHomeSection1';
import React, { Suspense } from 'react';

const Home = async () => {
    const countInfo = UseHomeSection1();
    const categoriesPromise = UseGetAllCategories();
    return (
        <>
            <Hero countInfo={countInfo}/>

            <Suspense fallback={<Loading />}>
                <ProjectCouter countInfo={countInfo} />
            </Suspense>

            <HomeServicesSection />

            <HomeAbout />

            <HomeProjects />

            <HomeClientsSection />

            <HomeContact />

            
        </>
    );
};

export default Home;