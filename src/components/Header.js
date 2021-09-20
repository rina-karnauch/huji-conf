import './Header.css';
import {FcLock} from 'react-icons/fc';
import {GiNightSky} from 'react-icons/gi';
import {FaFacebook} from 'react-icons/fa'


const Header = () => {
    return (
        <div className="header-line">
            <FcLock className="lock-icon"/>
            <div className="title-text">HUJI Confessions</div>
            <div className="side-icons">
                <GiNightSky className="night-mode" onClick=""/>
                <span className="space"/>
                <FaFacebook className="facebook-link"
                            onClick={() => window.open("https://www.facebook.com/ConfessionsHUJI/")}/>
            </div>
        </div>
    );
}

export default Header;
