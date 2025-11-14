import React from 'react';
import styles from './Cta.module.scss'
import BookCallButton from '@shared/ui/BookCallButton/BookCallButton';
import AppButton from '@shared/ui/AppButton';
const Cta = () => {
    return (
        <div className={styles.cta}>
            <p>Вам нужно индивидуальное решение для вашего бизнеса?</p>
            <div className={styles.btns}>
                <BookCallButton/>
                <AppButton className={styles.btnContact}>Наши контакты</AppButton>
            </div>
        </div>
    );
};

export default Cta;