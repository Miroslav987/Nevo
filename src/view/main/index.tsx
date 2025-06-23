import React from 'react';
import HeroBlock from './HeroBlock/ui';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam/ui';
import ListOurProject from './ListOurProject/ui';

const Main = () => {
    return (
        <>
            <HeroBlock/>
            <AboutUs/>
            <OurTeam/>
            <ListOurProject/>
        </>
    );
};

export default Main;