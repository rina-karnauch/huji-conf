import './Upnav.css';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {AiTwotoneFileText} from 'react-icons/ai';
import {HiPhone} from 'react-icons/hi';


const Upnav = () => {
    return (
        <div className="up-nav">
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/management/members"
                onSelect={({itemId}) => {
                    // maybe push to the route
                }}
                items={[
                    {
                        title: 'home',
                        itemId: '/confess',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <AiTwotoneFileText name="home" />,
                    },
                    {
                        title: 'hotlines',
                        itemId: '/hotlines',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <HiPhone name="hotlines" />,
                    },
                ]}
            />
        </div>
    );
}

export default Upnav;