import React from 'react';
import styles from './TechStackBlock.module.scss'
import { Text } from '@shared/ui/Text';
import AppImage from '@shared/ui/Image';
import landing from '@shared/icons/landing.svg'
import store from '@shared/icons/store.svg'
import corporate from '@shared/icons/corporate.svg'
import { aboutUs } from '../../model/adoutUs.mock';

const TechStackBlock = () => {
    return (
        <div className={styles.techStackBlock}>
            <div className={styles.techCard}>
                <div className={styles.info}>
                    <Text>Одностроничные сайты</Text>
                    <div className={styles.icon}><AppImage src={landing}/></div>
                </div>
            </div>
            <div className={styles.techCard}>
                <div className={styles.info}>
                    <Text>Интернет Магазины</Text>
                    <div className={styles.icon}><AppImage src={store}/></div>
                </div>
            </div>
            <div className={styles.techCard}>
                <div className={styles.info}>
                    <Text>Корпоративные сайты</Text>
                    <div className={styles.icon}><AppImage src={corporate}/></div>
                </div>
            </div>
            <div className={styles.toolsCard}>
                <Text className={styles.toolsTitle}>Технологии и инструменты:</Text>
                <div className={styles.toolsInfo}>
                    <Text className={styles.toolsFront}>{aboutUs.tools_front}</Text>
                    <Text className={styles.toolsBack}>{aboutUs.tools_back}</Text>
                </div>
            </div>
        </div>
    );
};

export default TechStackBlock;