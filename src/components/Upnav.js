import './Upnav.css';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Navigation} from 'react-minimal-side-navigation';
import {AiTwotoneFileText} from 'react-icons/ai';
import {HiPhone} from 'react-icons/hi';
import {lightTheme} from "../themes/lightTheme";
import {darkTheme} from "../themes/darkTheme";
import {useHistory} from "react-router-dom";


const Upnav = (props) => {

    function renderTheme() {
        let root = document.documentElement;

        if (props.theme === 'light') {
            root.style.setProperty('--sidebar-bg-color', lightTheme.sidebar);
            root.style.setProperty('--border-color', lightTheme.sidebarBorder);
            root.style.setProperty('--sidebar-hover-color', lightTheme.sidebarHoverBG);
            root.style.setProperty('--sidebar-text', lightTheme.sidebarText);
        } else {
            root.style.setProperty('--sidebar-bg-color', darkTheme.sidebar);
            root.style.setProperty('--border-color', darkTheme.sidebarBorder);
            root.style.setProperty('--sidebar-hover-color', darkTheme.sidebarHoverBG);
            root.style.setProperty('--sidebar-text', darkTheme.sidebarText);
        }
    }

    renderTheme();

    const history = useHistory();
    return (
        <div className="up-nav">
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/management/members"
                onSelect={({itemId}) => {
                    history.push(itemId);
                }}
                items={[
                    {
                        title: 'write a confessions',
                        itemId: '/',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <AiTwotoneFileText name="home"/>,
                    },
                    {
                        title: 'reach hotlines',
                        itemId: '/hotlines',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <HiPhone name="hotlines"/>,
                    },
                ]}
            />
        </div>
    );
}

export default Upnav;