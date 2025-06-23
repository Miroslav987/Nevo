import React from 'react';
import styles from './Hero.module.scss'
import AppButton from '@shared/ui/Button';
import arrow from '@shared/icons/arrow.svg'

import { Text } from '@shared/ui/Text';
import AppImage from '@shared/ui/Image';
import { hero } from '../model/hero.mock';


const Hero = () => {
    return (
        <div className={`container ${styles.hero}`}>
            <div className={styles.heroHeader}>
            <h1  dangerouslySetInnerHTML={{ __html: hero.mainText }}>
            </h1>

            <div className={styles.casesPreviewBtns}>
                <AppButton className={styles.caseBtn}> <Text className={styles.text}> Наши кейсы </Text><div className={styles.arrow}><AppImage src={arrow} alt='стрелка'/></div></AppButton> 
            </div>

            <div className={styles.casesPreviewList}>
                <div className={styles.cardPreviewAboutUs}>
                    <div className={styles.cardImg}>
                    <AppImage src={hero.cardPreviewAboutUs.img} alt='фигура'/>
                    </div>
                    <Text> {hero.cardPreviewAboutUs.text}</Text>
                </div>
                <div className={styles.cardPreviewProject}>
                    <AppImage src={hero.cardPreviewProject.imgOne} />
                    <AppImage src={hero.cardPreviewProject.imgTwo} />
                </div>
            </div>
</div>
        </div>
    );
};

export default Hero;