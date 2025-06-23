import React from 'react';
import styles from './FooterNav.module.scss'
import LinksGroup from './components/LinksGroup';
import { navItems } from '@entities/footer/model/nav.mock';

const FooterNav = () => {
    return (
        <nav className={styles.footerNav}>
            {navItems.map((item, i)=>
            <LinksGroup key={i} item={item} />)}
        </nav>
    );
};

export default FooterNav;