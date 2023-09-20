import Link from "next/link";
import styles from "../css/modules/Footer.module.css";

function Footer() {
    return (
        <div id={styles["footerContainer"]}>
            <div id={styles["footerInfo"]}>
                <div id={styles["footerContact"]}>
                    <h1>Contact</h1>
                    <div className="line"/>
                    <p>+1 (574) 272-5683<br/>
                        1717 N. Hickory Rd
                    </p>
                </div>
                <div id={styles["footerHours"]}>
                    <h1>Hours</h1>
                    <div className="line"/>
                    <p>Tuesday - Thursday<br/>
                        3:15PM - 5:15PM
                    </p>
                </div>
                <div id={styles["footerManagement"]}>
                    <h1>Management</h1>
                    <div className="line"/>
                    <p>Gerri Griffin<br/>
                        Elaine Taylor
                    </p>
                </div>
                <div id={styles["footerVolunteer"]}>
                    <Link href={"/volunteer"}><h1>Volunteer</h1></Link>
                    <div className="line"/>
                    <p>Volunteer<br/>
                        Donate
                    </p>
                </div>
            </div>
            <div id={styles["footerCr"]}>
                <p>&#169; 2022 by Slice of Life South Bend</p>
            </div>
        </div>
    );
}

export default Footer;