import './Header.css';
import { FcLock } from 'react-icons/fc';


const Header = () => {
    return (
        <div className="header-line">
            <div className="lock-icon">
                <FcLock /></div>
            <div className="title-text">HUJI Confessions</div>
        </div>
    );
}

export default Header;
