import React from 'react';
import styles from './styles.module.scss'
import FooterNav from '@entities/footer/ui/FooterNav';
import CTAHeading from '@entities/footer/ui/CTAHeading';
import FooterText from '@entities/footer/ui/FooterText';
import CTAButton from '@features/CTAButton/inex';
import FooterBrand from '@entities/footer/ui/FooterBrand';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>

                <div className={styles.linksAndCTA}>
                    <CTAHeading />
                    <FooterNav />
                </div>

                <FooterText />

                <div className={styles.btnBlock}>
                    <CTAButton />
                </div>

                <FooterBrand />

            </div>
        </footer>
    );
};

export default Footer;