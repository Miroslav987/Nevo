import AppButton from '@shared/ui/Button';
import React, { useCallback } from 'react';
import styles from './NavButton.module.scss'
import { ItemNav } from '@entities/header/model/nav.mock';
import Image from 'next/image';
import { Typography } from 'antd';
// import { usePathname } from 'next/navigation'; 
const { Text } = Typography;

type NavButtonProps = {
    item: ItemNav
    isActive:string // временно
    handleNav: (path: string) => void;
}


const NavButton = React.memo(({ item, isActive, handleNav }: NavButtonProps) => {
    // const pathname = usePathname()
    // const isActive = pathname === item.path;

    const handleClick = useCallback(() => {
        handleNav(item.path);
    }, [handleNav, item.path]);

    return (
        <AppButton
            onClick={() => handleClick()}
            className={`${styles.navButton} ${isActive === item.path ? styles.active : ""}`}
        >
            <Image src={item.icon} alt="Логотип" priority />  <Text>{item.title}</Text>
        </AppButton>
    );
});

NavButton.displayName = 'NavButton';

export default NavButton;