import React from 'react';
import styles from './CardProject.module.scss'
import AppImage from '@shared/ui/Image';
import { Text } from '@shared/ui/Text';
import { CardProject as CardProjectMock } from '../../model/ListOurProject.mock';

type CardProjectProps = {
    card: CardProjectMock
}


const CardProject = ({ card }: CardProjectProps) => {
    return (
        <div className={styles.cardProject}>
            <div className={styles.mainImg}><AppImage src={card.main_img} /></div>
            <div className={styles.info}>
                <div className={styles.infoImages}>
                        <AppImage src={card.img_one} />
                        <AppImage src={card.img_two} />
                </div>
                <div className={styles.infoText}>
                    <Text className={styles.title}>{card.title}</Text>
                    <div className={styles.description}>
                        {card.description.map((text) =>
                            <Text className={styles.text}>{text} </Text>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProject;