'use client';

import burgerMenu from '@shared/icons/burger_menu.svg';
import Image from 'next/image';
import styles from './BurgerButton.module.scss';
import { useDrawerStore } from '@entities/header/model/useDrawerStore';
import AppButton from '@shared/ui/Button';

export const BurgerButton = () => {
  const toggleDrawer = useDrawerStore(state => state.toggle);

  return (
    <AppButton onClick={toggleDrawer} className={styles.burgerMenu}>
      <Image src={burgerMenu} alt="Открыть меню" />
    </AppButton>
  );
};
