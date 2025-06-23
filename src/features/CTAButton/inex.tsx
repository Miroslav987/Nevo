import React from 'react';
import styles from './CTAButton.module.scss'
import AppButton from '@shared/ui/Button';

const CTAButton = () => {
    return (
            <AppButton className={styles.ctaButton}>Начните сейчас</AppButton>
    );
};

export default CTAButton;