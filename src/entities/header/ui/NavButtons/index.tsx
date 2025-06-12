'use client';

import NavButton from '@entities/header/components/NavButton';
import styles from './NavButtons.module.scss';
// import { useRouter } from 'next/navigation';
import { itemNav } from '@entities/header/model/nav.mock';
import {  useState } from 'react';
import { useDrawerStore } from '@entities/header/model/useDrawerStore';

type NavButtonsProps = {
  isMob?: boolean
}

export const NavButtons = ({isMob}:NavButtonsProps) => {
//   const router = useRouter();
    const close = useDrawerStore(state => state.close);
    const [isActive, useIsActive] = useState('/') // временно

  const handleNav = (path: string) => {
    useIsActive(path)
    close()
    // router.push(path);
  };

  return (
    <div  className={`${styles.navButtons} ${isMob && styles.navButtonsMob} `}>
      {itemNav.map((item, i) => (
        <NavButton key={i} item={item} isMob={isMob} isActive={isActive} handleNav={handleNav} />
      ))}
    </div>
  );
};