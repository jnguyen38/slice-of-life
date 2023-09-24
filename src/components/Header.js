import {useState} from "react";
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
    const scheduleRedirect = "/schedules";

    function toggleMenu() {
        setMenu(curr => !curr);
    }

    return (
        <div className={`${styles.header} ${props.scrollingUp ? styles.full : styles.shrink} gap-5 d-flex`}>
            <Link href={homeRedirect} className={`${styles.headerMain} d-flex`}>
                <Image src={logo} alt={``} width={props.scrollingUp ? 40:30} height={props.scrollingUp ? 40:30} className={styles.logo} priority/>
                <h1 className={`${styles.headerTitle} ${props.scrollingUp ? "fs-smd" : "fs-sm"} fw-2 px-1`}>Slice of Life</h1>
            </Link>

            <nav className={`${styles.headerNav} ${props.scrollingUp ? styles.visible : styles.invisible} gap-1 d-flex`}>
                <HeaderLink {...props} title={`Home`} redirect={homeRedirect}></HeaderLink>
                <HeaderLink {...props} title={`Contact`} redirect={contactRedirect}></HeaderLink>
                <HeaderLink {...props} title={`Volunteer`} redirect={volunteerRedirect}></HeaderLink>
                <HeaderLink {...props} title={`Schedules`} redirect={scheduleRedirect}></HeaderLink>
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

function HeaderLink(props) {
    return (
        <Link href={props.redirect}>
            <div
                className={`${styles.navItem} ${props.page === props.redirect ? styles.selected : ""} d-flex-row-c p-1`}>
                <p className={`fs-eh fw-2`}>{props.title}</p>
            </div>
        </Link>
    )
}

export default Header;

