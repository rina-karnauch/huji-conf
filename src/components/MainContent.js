import './MainContent.css';
import '../themes/Themes.js';
import {changeThemeCSS} from '../themes/Themes.js';
import * as React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Upnav from "./Upnav";
import Table from "./Table";
import Footer from "./Footer";
import {useState} from "react";


const MainContent = () => {

    const [theme, setTheme] = useState('light');

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        changeThemeCSS(newTheme);
    }

    return (
        <div>
            <Header theme={theme} onChangeTheme={changeTheme}/>
            <Upnav theme={theme}/>
            <div className="flex-container">
                <Sidebar theme={theme}/>
                <Table theme={theme}/>
            </div>
            <Footer theme={theme}/>
        </div>
    );
}

export default MainContent;
