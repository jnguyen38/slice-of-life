import Link from "next/link";

function Footer() {
    return (
        <div id="footer-container">
            <div id="footer-info">
                <div id="footer-contact">
                    <h1>Contact</h1>
                    <div className="line"/>
                    <p>+1 (574) 272-5683<br/>
                        1717 N. Hickory Rd<br/>
                        South Bend, IN 46635
                    </p>
                </div>
                <div id="footer-hours">
                    <h1>Hours</h1>
                    <div className="line"/>
                    <p>Tuesday - Thursday<br/>
                        3:15PM - 5:15PM
                    </p>
                </div>
                <div id="footer-management">
                    <h1>Management</h1>
                    <div className="line"/>
                    <p>Gerri Griffin<br/>
                        Elaine Taylor
                    </p>
                </div>
                <div id="footer-Volunteer">
                    <Link href={"/volunteer"}><h1>Volunteer</h1></Link>
                    <div className="line"/>
                    <p>Volunteer<br/>
                        Donate
                    </p>
                </div>
            </div>
            <div id="footer-cr">
                <p>&#169; 2022 by Slice of Life South Bend</p>
            </div>
        </div>
    );
}

export default Footer;