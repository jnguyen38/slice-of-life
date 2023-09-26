import '../css/root.css'
import { Analytics } from '@vercel/analytics/react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";

function App({ Component, pageProps }) {
    const [page, setPage] = useState("");


    useEffect(() => {
        if (window.location.pathname)
            setPage(window.location.pathname)
    })

    return (
        <div>
            <Header page={page}/>
            <Component {...pageProps}/>
            <Footer page={page}/>
            <Analytics/>
        </div>
    )
}

export default App