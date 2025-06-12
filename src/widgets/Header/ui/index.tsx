'use client';

import styles from './styles.module.scss';
import AppLogo from '@shared/ui/AppLogo';
import { BurgerButton } from '@entities/header/ui/BurgerButton';
import { MobileNavDrawer } from '@entities/header/ui/MobileNavDrawer';
import { NavButtons } from '@entities/header/ui/NavButtons';



const Header = () => {
    return (
        <header className={`container ${styles.header}`}>
            <nav>
                <AppLogo/>
                <NavButtons/>
                <BurgerButton/>
                <MobileNavDrawer/>
            </nav>
        </header>
    );
};

export default Header;
