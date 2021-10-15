import './Upnav.css';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {AiTwotoneFileText} from 'react-icons/ai';
import {HiPhone} from 'react-icons/hi';
import {useHistory} from "react-router-dom";
import {lightTheme} from "../themes/lightTheme";
import {darkTheme} from "../themes/darkTheme";


const Upnav = (props) => {

    function renderTheme() {
        let root = document.documentElement;
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
                        itemId: '/home',
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