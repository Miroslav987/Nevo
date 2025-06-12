'use client';

import { Drawer, Typography } from 'antd';
import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import styles from './MobileNavDrawer.module.scss';
import { itemNav } from '@entities/header/model/nav.mock';
import AppButton from '@shared/ui/Button';
import { useDrawerStore } from '@entities/header/model/useDrawerStore';

const { Text } = Typography;

export const MobileNavDrawer = () => {
  const {close , isOpen} = useDrawerStore(state => state);
//   const router = useRouter();
  
  const handleNav = (path: string) => {
    // router.push(path);
    close();
  };

  return (
    <Drawer
    placement="top"
      onClose={close}
      open={isOpen}
      rootStyle={{
        top:125,
        height: 240,
        borderRadius: 30,
        overflow: 'hidden',
        margin: '0 15px',
      }}
      mask={false}
      closable={false}
    >
      <div className={styles.navMobBtns}>
        {itemNav.map((item, i) => (
          <AppButton
            key={i}
            onClick={() => handleNav(item.path)}
          >
            <Image src={item.icon} alt={item.title} /><keygen />
            <Text>{item.title}</Text>
          </AppButton>
        ))}
      </div>
    </Drawer>
  );
};
