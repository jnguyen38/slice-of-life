import {Link} from "react-router-dom";

function Header() {
    const homeRedirect = "./"
    const regRedirect = "./register"

    return (
        <div className="header">
            <section id="header-main">
                <h1>Slice of Life</h1>
            </section>
            <nav id="header-nav" className="d-flex-cc">
                <div className="nav-item d-flex-cc">
                    <Link to={homeRedirect}><h2 className="nav-link">Home</h2></Link>
                </div>
                <div className="nav-item d-flex-cc">
                    <Link to={regRedirect}><h2 className="nav-link">Register</h2></Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;

