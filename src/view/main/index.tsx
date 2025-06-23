import React from 'react';
import Hero from './Hero/ui';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam/ui';
import ListOurProject from './ListOurProject/ui';

const Main = () => {
    return (
        <>
            <Hero/>
            <AboutUs/>
            <OurTeam/>
            <ListOurProject/>
        </>
    );
};

export default Main;