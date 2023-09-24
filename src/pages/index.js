import Info from "../components/Info";
import {useEffect} from "react";

import styles from "../css/modules/App.module.css";
import logo from "../../public/media/sliceLogoSquare-removebg.png";
import Image from "next/image";
import Meta from "../components/Meta";

function App() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="App">
            <Meta title={`Slice of Life`}/>

            <section className={`${styles.AppHeader} d-flex-col-c gap-40`}>
                <Image className={styles.AppLogo} src={logo} alt="" width={350} height={370} priority/>
                <div className={`${styles.AppTitle} d-flex-col-c`}>
                    <p>Welcome to</p>
                    <h1 className={`fs-lg`}>Slice of Life</h1>
                </div>
            </section>

            <Info/>

        </div>
    );
}

export default App;

