import React from 'react';
import styles from './AboutUs.module.scss'
import AboutBlock from './components/AboutBlock';
import MissionBlock from './components/MissionBlock';
import TechStackBlock from './components/TechStackBlock';
const AboutUs = () => {
    return (
        <div className={`container ${styles.aboutUs}`}>
            <AboutBlock/>
            <MissionBlock/>
            <TechStackBlock/>
        </div>
    );
};

export default AboutUs;