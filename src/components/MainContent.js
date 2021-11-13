import './MainContent.css';
import '../themes/Themes.js';
import * as React from "react";
import Header from "./Header";
import Upnav from "./Upnav";
import Table from "./Table";
import Footer from "./Footer";
import {useState} from "react";
import {lightTheme} from "../themes/lightTheme";
import {darkTheme} from "../themes/darkTheme";
import { TextField, Button } from "@material-ui/core";


const MainContent = () => {

    const [theme, setTheme] = useState('light');

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    }

    function renderTheme() {
        let root = document.documentElement;

        if (theme === 'light') {
            root.style.setProperty('--bg-color', lightTheme.bg);
        } else {
            root.style.setProperty('--bg-color', darkTheme.bg);
        }
    }

    renderTheme();

    return (
        <div>
            <Header theme={theme} onChangeTheme={changeTheme}/>
            <Upnav theme={theme}/>
            <div className="flex-container">
                <Table theme={theme}/>
            </div>
            <Footer theme={theme}/>
        </div>
    );
}

export default MainContent;
