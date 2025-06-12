'use client';

import NavButton from '@entities/header/components/NavButton';
import styles from './DekstopNav.module.scss';
// import { useRouter } from 'next/navigation';
import { itemNav } from '@entities/header/model/nav.mock';
import { useState } from 'react';

export const DesktopNav = () => {
//   const router = useRouter();
    const [isActive, useIsActive] = useState('/')// временно

  const handleNav = (path: string) => {
    useIsActive(path)
    // router.push(path);
  };

  return (
    <div className={styles.dekstopNav}>
      {itemNav.map((item, i) => (
        <NavButton key={i} item={item} isActive={isActive} handleNav={handleNav} />
      ))}
    </div>
  );
};