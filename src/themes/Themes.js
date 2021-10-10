import {lightTheme} from './lightTheme'
import {darkTheme} from './darkTheme.js'

const Themes = (props) => {

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

    let root = document.documentElement;

    function changeThemeCSS() {
        if (props.theme === 'light') {
            bg = lightTheme.bg;
            sidebar = lightTheme.sidebar;
            sidebarBorder = lightTheme.sidebarBorder;
            headerBG = lightTheme.headerBG;
            headerBorder = lightTheme.headerBorder;
            confessionBG = lightTheme.confessionBG;
            confessionBorder = lightTheme.confessionBorder;
            footerBG = lightTheme.footerBG;
            footerBorder = lightTheme.footerBorder;
            textBoxBorder = lightTheme.textBoxBorder;
        } else {
            bg = darkTheme.bg;
            sidebar = darkTheme.sidebar;
            sidebarBorder = darkTheme.sidebarBorder;
            headerBG = darkTheme.headerBG;
            headerBorder = darkTheme.headerBorder;
            confessionBG = darkTheme.confessionBG;
            confessionBorder = darkTheme.confessionBorder;
            footerBG = darkTheme.footerBG;
            footerBorder = darkTheme.footerBorder;
            textBoxBorder = darkTheme.textBoxBorder;
        }
        root.style.setProperty('--bg-color', bg);
        root.style.setProperty('--sidebar-bg-color', sidebar);
        root.style.setProperty('--border-color', sidebarBorder);
        root.style.setProperty('--header-bg', headerBG);
        root.style.setProperty('--header-border', headerBorder);
        root.style.setProperty('--confession-table-bg', confessionBG);
        root.style.setProperty('--confession-table-border', confessionBorder);
        root.style.setProperty('--footer-bg', footerBG);
        root.style.setProperty('--footer-border', footerBorder);
    }

}

export default Themes;