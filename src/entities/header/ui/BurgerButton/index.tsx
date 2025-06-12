'use client';

import burgerMenu from '@shared/icons/burger_menu.svg';
import Image from 'next/image';
import AppButton from '@shared/ui/Button';
import styles from './BurgerButton.module.scss';
import { useDrawerStore } from '@entities/header/model/useDrawerStore';

export const BurgerButton = () => {
  const toggleDrawer = useDrawerStore(state => state.toggle);

  return (
    <AppButton onClick={toggleDrawer} className={styles.burgerBtn}>
      <Image src={burgerMenu} alt="Открыть меню" />
    </AppButton>
  );
};
