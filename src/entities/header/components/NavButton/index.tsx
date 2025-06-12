import AppButton from '@shared/ui/Button';
import React, { useCallback } from 'react';
import styles from './NavButton.module.scss'
import { ItemNav } from '@widgets/Header/module/nav.mock';
import Image from 'next/image';
import { Typography } from 'antd';
import { usePathname } from 'next/navigation';
const { Text } = Typography;

type NavButtonProps = {
    item: ItemNav
    handleNav: (path: string) => void;
}


const NavButton = React.memo(({ item, handleNav }: NavButtonProps) => {
    const pathname = usePathname()
    const isActive = pathname === item.path;

    const handleClick = useCallback(() => {
        handleNav(item.path);
    }, [handleNav, item.path]);

    return (
        <AppButton
            onClick={() => handleClick()}
            className={`${styles.navButton} ${isActive ? styles.active : ""}`}
        >
            <Image src={item.icon} alt="Логотип" priority />  <Text>{item.title}</Text>
        </AppButton>
    );
});

NavButton.displayName = 'NavButton';

export default NavButton;