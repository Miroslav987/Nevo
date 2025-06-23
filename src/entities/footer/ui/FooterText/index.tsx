import React from 'react';
import styles from './FooterText.module.scss'
import { Text } from '@shared/ui/Text';
import { footer } from '@entities/footer/model/footer.mock';

const FooterText = () => {
    return (
        <div className={styles.text}>
            <Text>{footer.text}</Text>
        </div>
    );
};

export default FooterText;