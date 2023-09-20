import Info from "../components/Info";
import Head from "next/head";
import {useEffect} from "react";

import styles from "../css/modules/App.module.css";
import logo from "../../public/media/sliceLogoSquare.jpeg";
import Image from "next/image";

function App() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="App">

            <Head>
                <title>Slice of Life</title>
                <meta name="description" content="Slice of Life organization website. Get information and register. Next.js app created by Jonathan Nguyen." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Slice of Life" />
                <meta property="og:description" content="Slice of Life organization website. Get information and register. Next.js app created by Jonathan Nguyen."/>
                <meta property="og:image" content="https://sliceoflifesb.org/sliceLogoSquare.jpeg"/>
                <link rel="icon" href="/media/sliceFavicon.png" />
            </Head>

            <header className={styles.AppHeader}>
                <Image src={logo} alt="" width={350} height={370} priority/>
                <p>Welcome to</p>
                <h1>Slice of Life</h1>
            </header>

            <Info/>

        </div>
    );
}

export default App;

