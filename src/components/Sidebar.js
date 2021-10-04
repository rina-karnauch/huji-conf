import './Sidebar.css';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Navigation} from 'react-minimal-side-navigation';
import {AiTwotoneFileText} from 'react-icons/ai';
import {HiPhone} from 'react-icons/hi';
import {useHistory} from "react-router-dom";


function Sidebar() {

    const history = useHistory();

    return (
        <div className="side-bar">
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/management/members"
                onSelect={({itemId}) => {
                    history.push(itemId);
                }}
                items={[
                    {
                        title: 'write a confession',
                        itemId: '/',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <AiTwotoneFileText name="home" fontSize="24px"/>,
                    },
                    {
                        title: 'reach hotlines',
                        itemId: '/hotlines',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <HiPhone name="hotlines" fontSize="24px"/>,
                    },
                ]}
            />
        </div>
    );
}

export default Sidebar;