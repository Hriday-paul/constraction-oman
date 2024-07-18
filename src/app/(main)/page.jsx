import Hero from '@/components/Hero/Hero';
import HomeAbout from '@/components/HomeAbout/HomeAbout';
import HomeClientsSection from '@/components/HomeClientsSection/HomeClientsSection';
import HomeProjects from '@/components/HomeProjects/HomeProjects';
import ProjectCouter from '@/components/ProjectCounter/ProjectCounter';
import HomeServicesSection from '@/components/services/HomeServicesSection';
import Loading from '@/components/shared/Loading/Loading';
import TopSection from '@/components/shared/TopSection/TopSection';
import UseGetAllCategories from '@/Hooks/Home/UseGetAllCategories';
import UseHomeSection1 from '@/Hooks/Home/UseHomeSection1';
import React, { Suspense } from 'react';

const Home = async () => {
    const countInfo = UseHomeSection1();
    const categoriesPromise = UseGetAllCategories();
    return (
        <>
            <Hero />

            <Suspense fallback={<Loading />}>
                <ProjectCouter countInfo={countInfo} />
            </Suspense>

            <Suspense fallback={<Loading />}>
                <HomeServicesSection categoriesPromise={categoriesPromise} />
            </Suspense>

            <HomeAbout />

            <HomeProjects />

            <HomeClientsSection />

            <TopSection />
        </>
    );
};

export default Home;