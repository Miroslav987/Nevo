'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Drawer, Typography } from 'antd';
import { useState, useCallback } from 'react';

import logo from '@shared/icons/logo.svg';
import burgerMenu from '@shared/icons/burger_menu.svg';

import AppButton from '@shared/ui/Button';
import NavButton from '@entities/header/components/NavButton';

import styles from './styles.module.scss';
import { itemNav } from '../module/nav.mock';

const { Text } = Typography;

const Header = () => {
    const [isDrawer, setDrawer] = useState(false);
    
    const router = useRouter();

    const handleNav = useCallback((path: string) => {
        router.push(path);
        setDrawer(false);
    }, [router]);

    const toggleDrawer = useCallback(() => {
        setDrawer((prev) => !prev);
    }, []);

    return (
        <header className={`container ${styles.header}`}>
            <nav>
                <div className={styles.logo}>
                    <Image src={logo} alt="Логотип" priority />
                </div>

                <div className={styles.navBtns}>
                    {itemNav.map((item) => (
                        <NavButton key={item.path} item={item} handleNav={handleNav} />
                    ))}
                </div>

                <AppButton
                    onClick={toggleDrawer}
                    className={styles.burgerMenu}
                    aria-label="Меню навигации"
                >
                    <Image src={burgerMenu} alt="Открыть меню" />
                </AppButton>

                <Drawer
                    placement="top"
                    onClose={() => setDrawer(false)}
                    open={isDrawer}
                    closable={false}
                    mask={false}
                    rootStyle={{
                        top: 125,
                        height: 240,
                        borderRadius: 30,
                        overflow: 'hidden',
                        margin: '0 15px',
                    }}
                    bodyStyle={{
                        borderRadius: 30,
                        overflow: 'hidden',
                        height: '100%',
                    }}
                >
                    <div className={styles.navMobBtns}>
                        {itemNav.map((item) => (
                            <AppButton
                                key={item.path}
                                onClick={() => handleNav(item.path)}
                            >
                                <Image src={item.icon} alt={item.title} />
                                <Text>{item.title}</Text>
                            </AppButton>
                        ))}
                    </div>
                </Drawer>
            </nav>
        </header>
    );
};

export default Header;
