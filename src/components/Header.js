import './Header.css';
import {FcLock} from 'react-icons/fc';
import {GiNightSky} from 'react-icons/gi';
import {FaFacebook} from 'react-icons/fa'
import {lightTheme} from '../themes/lightTheme'
import {darkTheme} from "../themes/darkTheme";
import * as React from "react";

const Header = (props) => {

    function changeTheme() {
        props.theme === 'light' ? props.onChangeTheme('dark') : props.onChangeTheme('light');
    }

    function renderTheme() {
        let root = document.documentElement;

        if (props.theme === 'light') {
            root.style.setProperty('--header-bg', lightTheme.headerBG);
            root.style.setProperty('--header-border', lightTheme.headerBorder);
        } else {
            root.style.setProperty('--header-bg', darkTheme.headerBG);
            root.style.setProperty('--header-border', darkTheme.headerBorder);
        }
    }

    renderTheme();

    return (
        <div className="header-line">
            <FcLock className="lock-icon"/>
            <div className="title-text">Some Confessions</div>
            <div className="side-icons">
                <GiNightSky className="night-mode" onClick={changeTheme}
                />
                <span className="space"/>
                <FaFacebook className="facebook-link"
                            onClick={() => window.open("https://www.facebook.com/ConfessionsHUJI/")}/>
            </div>
        </div>
    );
}

export default Header;