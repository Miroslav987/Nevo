import React from 'react';
import styles from './About.module.scss';
import AboutBlock from './components/AboutBlock';
import MissionBlock from './components/MissionBlock';

const About = () => {
    return (
        <div className={styles.about}>
            <AboutBlock/>
            <MissionBlock/>
        </div>
    );
};

export default About;