import {useEffect, useState} from "react";
import styles from "../css/modules/Header.module.css"
import logo from "../../public/media/sliceLogoTransparent.png";
import Link from "next/link";
import Image from "next/image";

function handleScroll() {

}

function Header() {
    const [menu, setMenu] = useState(false);

    const homeRedirect = "/";
    const regRedirect = "/register";
    const contactRedirect = "/contact";

    function toggleMenu() {
        setMenu(curr => !curr);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    });

    return (
        <div className={`${styles.header} d-flex jc-sb`}>
            <Link href={homeRedirect} className={`${styles.headerMain} d-flex-row-c`}>
                <Image src={logo} alt={``} width={40} height={40}/>
                <h1 className={`fs-md fw-2 px-1`}>Slice of Life</h1>
            </Link>
            <nav className={`${styles.headerNav} gap-1 d-flex-row-c mr-4`}>
                <Link href={homeRedirect}>
                    <div className={`${styles.navItem} d-flex-row-c p-1 rounded`}><p className={`fs-sm fw-3`}>Home</p></div>
                </Link>
                <Link href={contactRedirect}>
                    <div className={`${styles.navItem} d-flex-row-c p-1 rounded`}><p className={`fs-sm fw-3`}>Contact</p></div>
                </Link>
                <Link href={regRedirect}>
                    <div className={`${styles.navItem} d-flex-row-c p-1 rounded`}><p className={`fs-sm fw-3`}>Register</p></div>
                </Link>
            </nav>
            <div id={`menu`} className={`${styles.menu} ${menu ? styles.rotated : ""} d-flex-col-c gap-1 clickable`} onClick={toggleMenu}>
                <span/><span/><span/>
            </div>
        </div>
    );
}

export default Header;

