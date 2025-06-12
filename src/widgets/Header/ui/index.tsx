'use client';

import styles from './styles.module.scss';
import AppLogo from '@shared/ui/AppLogo';
import { DesktopNav } from '@entities/header/ui/DekstopNav';
import { BurgerButton } from '@entities/header/ui/BurgerButton';
import { MobileNavDrawer } from '@entities/header/ui/MobileNavDrawer';



const Header = () => {
    return (
        <header className={`container ${styles.header}`}>
            <nav>
                <AppLogo/>
                <DesktopNav/>
                <BurgerButton/>
                <MobileNavDrawer/>
            </nav>
        </header>
    );
};

export default Header;
