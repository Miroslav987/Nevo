import React from 'react';
import styles from './TechStackBlock.module.scss'
import { Text } from '@shared/ui/Text';
import { aboutUs } from '../../model/adoutUs.mock';
import TechCard from './components/TechCard';

const TechStackBlock = () => {
    return (
        <div className={styles.techStackBlock}>
            {aboutUs.techCards.map((card, i) =>
                <TechCard key={i} card={card} />
            )}
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