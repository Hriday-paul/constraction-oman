import Hero from '@/components/Hero/Hero';
import HomeAbout from '@/components/HomeAbout/HomeAbout';
import HomeClientsSection from '@/components/HomeClientsSection/HomeClientsSection';
import HomeProjects from '@/components/HomeProjects/HomeProjects';
import ProjectCouter from '@/components/ProjectCounter/ProjectCounter';
import HomeServicesSection from '@/components/services/HomeServicesSection';
import Link from 'next/link';
import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const Home = () => {
    return (
        <>
            <Hero />
            <ProjectCouter />
            {/* <HomeServicesSection /> */}
            {/* <HomeAbout /> */}
            {/* <HomeProjects /> */}
            {/* <HomeClientsSection /> */}
        </>
    );
};

export default Home;