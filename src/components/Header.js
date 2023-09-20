import {useEffect, useState} from "react";
import styles from "../css/modules/Header.module.css"
import logo from "../../public/media/sliceLogoTransparent.png";
import Link from "next/link";
import Image from "next/image";

function Header(props) {
    const [menu, setMenu] = useState(false);

    const homeRedirect = "/";
    const regRedirect = "/register";
    const contactRedirect = "/contact";
    const volunteerRedirect = "/volunteer";

    function toggleMenu() {
        setMenu(curr => !curr);
    }

    return (
        <div className={`${styles.header} ${props.scrollingUp ? styles.full : styles.shrink} gap-5 d-flex`}>
            <Link href={homeRedirect} className={`${styles.headerMain} d-flex`}>
                <Image src={logo} alt={``} width={props.scrollingUp ? 40:30} height={props.scrollingUp ? 40:30} className={styles.logo}/>
                <h1 className={`${styles.headerTitle} ${props.scrollingUp ? "fs-smd" : "fs-sm"} fw-2 px-1`}>Slice of Life</h1>
            </Link>

            <nav className={`${styles.headerNav} ${props.scrollingUp ? styles.visible : styles.invisible} gap-1 d-flex`}>
                <Link href={homeRedirect}>
                    <div
                        className={`${styles.navItem} ${props.page === "/" ? styles.selected : ""} d-flex-row-c p-1`}>
                        <p className={`fs-eh fw-2`}>Home</p>
                    </div>
                </Link>
                <Link href={contactRedirect}>
                    <div
                        className={`${styles.navItem} ${props.page === "/contact" ? styles.selected : ""} d-flex-row-c p-1`}>
                        <p className={`fs-eh fw-2`}>Contact</p>
                    </div>
                </Link>
                <Link href={volunteerRedirect}>
                    <div
                        className={`${styles.navItem} ${props.page === "/volunteer" ? styles.selected : ""} d-flex-row-c p-1`}>
                        <p className={`fs-eh fw-2`}>Volunteer</p>
                    </div>
                </Link>
                <Link href={regRedirect} id={styles['register']} className={`${styles.primaryButton}`}>
                    Register
                </Link>
            </nav>

            <div id={`menu`} className={`${styles.menu} ${menu ? styles.rotated : ""} d-flex-col-c gap-1 clickable`} onClick={toggleMenu}>
                <span/><span/><span/>
            </div>
        </div>
    );
}

export default Header;

