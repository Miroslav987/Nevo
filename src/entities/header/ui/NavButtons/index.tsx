'use client';

import NavButton from '@entities/header/components/NavButton';
import styles from './NavButtons.module.scss';
// import { useRouter } from 'next/navigation';
import { itemNav } from '@entities/header/model/nav.mock';
import { useCallback, useState } from 'react';

type NavButtonsProps = {
  isMob?: boolean
}

export const NavButtons = ({isMob}:NavButtonsProps) => {
//   const router = useRouter();
    const [isActive, useIsActive] = useState('/')// временно

  const handleNav = useCallback( (path: string) => {
    useIsActive(path)
    // router.push(path);
  },[isActive ,{/*router, close*/}]);

  return (
    <div  className={`${styles.navButtons} ${isMob? styles.navButtonsMob: ""} `}>
      {itemNav.map((item, i) => (
        <NavButton key={i} item={item} isActive={isActive} handleNav={handleNav} />
      ))}
    </div>
  );
};