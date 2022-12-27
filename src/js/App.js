import logo from "../media/sliceLogoSquare.jpeg"
import downArrow from "../media/icons/expandDown.png"
import { Parallax } from "react-scroll-parallax";
import Info from "./Info";
import {useEffect} from "react";

function App() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="App">
            <Parallax speed={-100}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Welcome to</p>
                    <h1>Slice of Life</h1>
                    <img src={downArrow} className="App-down" alt=""/>
                </header>
            </Parallax>
            <Parallax>
                <Info/>
            </Parallax>
        </div>
    );
}

export default App;

