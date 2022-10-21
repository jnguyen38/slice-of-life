import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './js/App';
import Header from './js/Header';
import reportWebVitals from './js/reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ParallaxProvider} from "react-scroll-parallax";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ParallaxProvider>
            <React.StrictMode>
                <Header/>
                <Routes>
                    <Route path="/*" element={<App/>}/>
                </Routes>
            </React.StrictMode>
        </ParallaxProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
