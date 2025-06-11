'use client'
import { usePathname, useRouter } from 'next/navigation';
import logo from '@shared/icons/logo.svg'
import main from '@shared/icons/main.svg'
import aboutUs from '@shared/icons/about_us.svg'
import aboutProject from '@shared/icons/about_project.svg'
import burgerMenu from '@shared/icons/burger_menu.svg'
import Image, { StaticImageData } from 'next/image';
import { Drawer } from 'antd';
import styles from "./styles.module.scss"
import { Typography } from 'antd';
import AppButton from '@shared/ui/Button';
import { useState } from 'react';

const { Title, Text } = Typography;

interface ItemNav {
    icon: StaticImageData,
    path: string
    title: string
}

const itemNav: ItemNav[] = [
    {
        icon: main,
        path: "/",
        title: "Главная"
    },
    {
        icon: aboutUs,
        path: "/about/us",
        title: "О нас"
    },
    {
        icon: aboutProject,
        path: "/about/project",
        title: "Наши проекты"
    }
]
const Header = () => {
    const [open, setOpen] = useState(false);
    const location = usePathname()
    const router = useRouter()

    function handleNav(path: string) {
        router.push(path)
        handleBurgerMenu()
    }
    function handleBurgerMenu() {
        setOpen(prev => prev ? false : true)
    }
    return (
        <header className={`container ${styles.header}`}>
            <nav>
                <div className={styles.logo}>
                    <Image src={logo} alt='logo' />
                </div>
                <div className={styles.btns}>
                    {itemNav.map((e: ItemNav, i: number) => (
                        <AppButton
                            key={i}
                            onClick={() => handleNav(e.path)}
                            className={e.path == location ? styles.active : ""}
                        >
                            <Image src={e.icon} alt={`${e.icon}`} />  <Text>{e.title}</Text>
                        </AppButton>
                    ))}
                </div>
                <AppButton onClick={handleBurgerMenu} className={styles.burgerMenu}><Image src={burgerMenu} alt='burger menu' /></AppButton>
                <Drawer
                    placement="top"
                    onClose={() => setOpen(false)}
                    open={open}
                    rootStyle={{
                        top: 125,
                        height:240,
                        borderRadius: 30,
                        overflow: 'hidden',
                        margin: "0 15px",
                    }}
                    bodyStyle={{
                        borderRadius: 30,
                        overflow: 'hidden',
                        height: '100%',
                    }}
                    mask={false}
                    closable={false}

                >
                     <div className={styles.btnsMob}>
                        {itemNav.map((e: ItemNav, i: number) => (
                            <AppButton
                                key={i}
                                className={styles.btns}
                                onClick={() => handleNav(e.path)}
                            >
                                <Image src={e.icon} alt={`${e.icon}`} />  <Text>{e.title}</Text>
                            </AppButton>
                        ))}
                    </div>
                 </Drawer>
            </nav>
        </header>
    );
};

export default Header;