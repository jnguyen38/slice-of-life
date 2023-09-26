import {useEffect, useState} from "react";
import styles from "../css/modules/Header.module.css"
import logo from "../../public/media/sliceLogoTransparent.png";
import Link from "next/link";
import Image from "next/image";

function Header(props) {
    if (props.page === "/admin") return;

    const [menu, setMenu] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(true);

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollingUp(scrollY < lastScrollY);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollingUp]);

    const homeRedirect = "/";
    const regRedirect = "/register";
    const contactRedirect = "/contact";
    const volunteerRedirect = "/volunteer";
    const scheduleRedirect = "/schedules";

    function toggleMenu() {
        setMenu(curr => !curr);
    }

    return (
        <div className={`${styles.header} ${scrollingUp ? styles.full : styles.shrink} gap-5 d-flex`}>
            <Link href={homeRedirect} className={`${styles.headerMain} d-flex`}>
                <Image src={logo} alt={``} width={scrollingUp ? 40:30} height={scrollingUp ? 40:30} className={styles.logo} priority/>
                <h1 className={`${styles.headerTitle} ${scrollingUp ? "fs-smd" : "fs-sm"} fw-2 px-1`}>Slice of Life</h1>
            </Link>

            <nav className={`${styles.headerNav} ${scrollingUp ? styles.visible : styles.invisible} gap-1 d-flex`}>
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

