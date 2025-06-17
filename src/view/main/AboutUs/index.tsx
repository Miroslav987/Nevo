import React from 'react';
import styles from './AboutUs.module.scss'
import HeaderBlock from './components/HeaderBlock';
import MissionBlock from './components/MissionBlock';
import TechStackBlock from './components/TechStackBlock';
const AboutUs = () => {
    return (
        <div className={styles.aboutUs}>
            <HeaderBlock/>
            <MissionBlock/>
            <TechStackBlock/>
        </div>
    );
};

export default AboutUs;