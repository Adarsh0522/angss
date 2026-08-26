import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Objectives from '../components/Objectives';
import Initiatives from '../components/Initiatives';
import Gallery from '../components/Gallery';
import VisionMission from '../components/VisionMission';
import GetInvolved from '../components/GetInvolved';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Objectives />
            <Initiatives />
            <Gallery />
            <VisionMission />
            <GetInvolved />
            <Contact />
        </main>
    );
};

export default Home;
