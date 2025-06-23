import React from 'react';
import styles from './FooterBrand.module.scss'
import { Text } from '@shared/ui/Text';
import { footer } from '@entities/footer/model/footer.mock';

const FooterBrand  = () => {
    return (
        <div className={styles.footerBranding}>
            <Text className={styles.slogan}>{footer.slogan}</Text>
            <Text className={styles.signature}>{footer.signature}</Text>
        </div>
    );
};

export default FooterBrand ;