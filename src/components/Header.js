import './Header.css';
import './MainContent.css';
import './Sidebar.css';
import './Header.css';
import './Footer.css';
import {FcLock} from 'react-icons/fc';
import {GiNightSky} from 'react-icons/gi';
import {FaFacebook} from 'react-icons/fa'
import * as React from "react";

const Header = () => {

    let bg = "#e7e7e7";
    let sidebar = "#f5f5f5";
    let sidebarBorder = "#dbdbdb";
    let headerBG = "#85bfd0";
    let headerBorder = "#dbdbdb";
    let confessionBG = "#f5f5f5";
    let confessionBorder = "#dbdbdb";
    let footerBG = "#efefef";
    let footerBorder = "#dbdbdb";
    let textBoxBorder = "#dbdbdb";

    const lightBG = "#e7e7e7";
    const darkBG = "#00040a";
    const lightSidebarBorder = "#dbdbdb";
    const darkSidebarBorder = "#1a1f25";
    const lightSidebar = "#f5f5f5";
    const darkSidebar = "#0d1116"
    const lightHeader = "#85bfd0";
    const darkHeader = "#161b22";
    const lightConfessionBG = "#f5f5f5";
    const darkConfessionBG = "#0d1116";
    const lightConfessionBorder = "#dbdbdb";
    const darkConfessionBorder = "#1a1f25";
    const lightFooterBG = "#efefef";
    const darkFooterBG = "#161b22";
    const lightFooterBorder = "#dbdbdb";
    const darkFooterBorder = "#1a1f25";
    const lightTextBoxBorder = "#dbdbdb";
    const darkTextBoxBorder = "#59626d";

    let root = document.documentElement;

    function changeTheme() {

        if (bg === lightBG) {
            bg = darkBG;
            sidebar = darkSidebar;
            sidebarBorder = darkSidebarBorder;
            headerBG = darkHeader;
            headerBorder = darkSidebarBorder;
            confessionBG = darkConfessionBG;
            confessionBorder = darkConfessionBorder;
            footerBG = darkFooterBG;
            footerBorder = darkFooterBorder;
            textBoxBorder = darkTextBoxBorder;
        } else {
            bg = lightBG;
            sidebar = lightSidebar;
            sidebarBorder = lightSidebarBorder;
            headerBG = lightHeader;
            headerBorder = lightSidebarBorder;
            confessionBG = lightConfessionBG;
            confessionBorder = lightConfessionBorder;
            footerBG = lightFooterBG;
            footerBorder = lightFooterBorder;
            textBoxBorder = lightTextBoxBorder;
        }

        root.style.setProperty('--bg-color', bg);
        root.style.setProperty('--sidebar-bg-color', sidebar);
        root.style.setProperty('--border-color', sidebarBorder);
        root.style.setProperty('--header-bg', headerBG);
        root.style.setProperty('--header-border', headerBorder);
        root.style.setProperty('--confession-table-bg', confessionBG);
        root.style.setProperty('--confestion-table-border', confessionBorder);
        root.style.setProperty('--footer-bg', footerBG);
        root.style.setProperty('--footer-border', footerBorder);
    }

    return (
        <div className="header-line">
            <FcLock className="lock-icon"/>
            <div className="title-text">Confessions</div>
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
export let textBoxBorder;