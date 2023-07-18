import '../css/root.css'
import { Analytics } from '@vercel/analytics/react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";

function App({ Component, pageProps }) {
    const [page, setPage] = useState("/");
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

    useEffect(() => {
        if (window.location.pathname)
            setPage(window.location.pathname)
    })

    return (
        <div>
            <Header page={page} setPage={setPage} scrollingUp={scrollingUp}/>
            <Component {...pageProps}/>
            <Footer/>
            <Analytics/>
        </div>
    )
}

export default App