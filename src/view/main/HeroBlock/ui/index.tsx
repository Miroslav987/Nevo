import React from 'react';
import styles from './HeroBlock.module.scss'
import AppButton from '@shared/ui/Button';
import arrow from '@shared/icons/arrow.svg'

import { Text } from '@shared/ui/Text';
import AppImage from '@shared/ui/Image';
import { heroBlock } from '../model/hero.mock';


const HeroBlock = () => {
    return (
        <div className={`container ${styles.heroBlock}`}>
            <div className={styles.heroHeader}>
            <h1  dangerouslySetInnerHTML={{ __html: heroBlock.mainText }}>
            </h1>

            <div className={styles.casesPreviewBtns}>
                <AppButton className={styles.caseBtn}> <Text className={styles.text}> Наши кейсы </Text><div className={styles.arrow}><AppImage src={arrow} alt='стрелка'/></div></AppButton> 
            </div>

            <div className={styles.casesPreviewList}>
                <div className={styles.cardPreviewAboutUs}>
                    <div className={styles.cardImg}>
                    <AppImage src={heroBlock.cardPreviewAboutUs.img} alt='фигура'/>
                    </div>
                    <Text> {heroBlock.cardPreviewAboutUs.text}</Text>
                </div>
                <div className={styles.cardPreviewProject}>
                    <AppImage src={heroBlock.cardPreviewProject.imgOne} />
                    <AppImage src={heroBlock.cardPreviewProject.imgTwo} />
                </div>
            </div>
</div>
        </div>
    );
};

export default HeroBlock;