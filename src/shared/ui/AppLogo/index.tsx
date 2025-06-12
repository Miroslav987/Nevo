import React from 'react';
import styles from './AppLogo.module.scss'
import Image from 'next/image';
import logo from '@shared/icons/logo.svg'

const AppLogo = () => {
    return (
        <div className={styles.logo}>
            <Image src={logo} alt="Логотип" priority />
        </div>
    );
};

export default AppLogo;