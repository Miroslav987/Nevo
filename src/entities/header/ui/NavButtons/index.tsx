'use client';

import NavButton from '@entities/header/components/NavButton';
import styles from './NavButtons.module.scss';
// import { useRouter } from 'next/navigation';
import { itemNav } from '@entities/header/model/nav.mock';
import { useCallback, useState } from 'react';

export const NavButtons = () => {
//   const router = useRouter();
    const [isActive, useIsActive] = useState('/')// временно

  const handleNav = useCallback( (path: string) => {
    useIsActive(path)
    // router.push(path);
  },[isActive ,{/*router, close*/}]);

  return (
    <div className={styles.dekstopNav}>
      {itemNav.map((item, i) => (
        <NavButton key={i} item={item} isActive={isActive} handleNav={handleNav} />
      ))}
    </div>
  );
};