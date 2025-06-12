import AppButton from '@shared/ui/Button';
import React from 'react';
import styles from './NavButton.module.scss'
import { ItemNav } from '@entities/header/model/nav.mock';
import Image from 'next/image';
import { Typography } from 'antd';
// import { usePathname } from 'next/navigation'; 
const { Text } = Typography;

type NavButtonProps = {
    item: ItemNav
    isMob?: boolean
    isActive:string // временно
    handleNav: (path: string) => void;
}

const NavButton = ({ item, isMob, isActive, handleNav }: NavButtonProps) => {
    // const pathname = usePathname()
    // const isActive = pathname === item.path;
    return (
        <AppButton
            onClick={() => handleNav(item.path)}
            className={`${styles.navButton} ${isActive === item.path && !isMob && styles.active}`}
        >
            <Image src={item.icon} alt="Логотип" priority />  <Text>{item.title}</Text>
        </AppButton>
    );
};

export default NavButton;