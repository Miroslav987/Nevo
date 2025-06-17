import React from 'react';
import styles from './TechCard.module.scss'
import AppImage from '@shared/ui/Image';
import { Text } from '@shared/ui/Text';
import { TechCard as TechCardMock } from 'view/main/AboutUs/model/adoutUs.mock';

type TechCardProps = {
    card: TechCardMock
}

const TechCard = ({ card }: TechCardProps) => {
    return (
        <div className={styles.techCard}>
            <div className={styles.info}>
                <Text>{card.title}</Text>
                <div className={styles.icon}><AppImage src={card.img} /></div>
            </div>
        </div>
    );
};

export default TechCard;