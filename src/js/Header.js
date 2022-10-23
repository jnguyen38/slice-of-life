import {Link} from "react-router-dom";
import {useState} from "react";
import logo from "../media/sliceLogoTransparent.png";

function Header() {
    const [menuClicked, setMenuClicked] = useState(false);

    const homeRedirect = "./";
    const regRedirect = "./register";
    const contactRedirect = "./contact";

    function menuClick() {
        setMenuClicked(() => {
           return !menuClicked;
        });
    }

    return (
        <div className="header">
            <Link to={homeRedirect} id="header-main" className="d-flex-row-c">
                <img src={logo} alt="" id="header-logo"/>
                <h1>Slice of Life</h1>
            </Link>
            <nav id="header-nav" className="d-flex-row-c">
                <Link to={homeRedirect}>
                    <div className="nav-item d-flex-row-c"><h2 className="nav-link">Home</h2></div>
                </Link>
                <Link to={regRedirect}>
                    <div className="nav-item d-flex-row-c"><h2 className="nav-link">Register</h2></div>
                </Link>
                <Link to={contactRedirect}>
                    <div className="nav-item d-flex-row-c"><h2 className="nav-link">Contact</h2></div>
                </Link>
            </nav>
            <div id="nav-menu" className={(menuClicked) ? "open" : ""} onClick={menuClick}>
                <span/> <span/> <span/> <span/>
            </div>
        </div>
    );
}

export default Header;

