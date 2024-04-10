'use client'
import logoImg  from '@/assets/logo.png'
import Link from 'next/link'
import classes from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './main-header-background'
import Navlink from './nav-link';
const MainHeader = () => {
    return (
        <>
        <MainHeaderBackground/>
        <header className={classes.header}>
            <Link href="/"  className={classes.logo}>
                <Image src={logoImg} alt='food with plate' priority/>
                Next Leval Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Navlink href='/meals'>Browse Meals</Navlink>
                    </li>
                    <li>
                        <Navlink href='/community'>Foodies Community</Navlink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default MainHeader