import './Header.css';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import {lightTheme} from '../themes/lightTheme'
import {darkTheme} from "../themes/darkTheme";
import * as React from "react";
import {GiSecretBook} from 'react-icons/gi';
import {GiNightSky} from 'react-icons/gi';
import {FaFacebook} from 'react-icons/fa'
import {useHistory} from "react-router-dom";

const Header = (props) => {

    // for url purposes
    const history = useHistory();

    function changeTheme() {
        props.theme === 'light' ? props.onChangeTheme('dark') : props.onChangeTheme('light');
    }

    function renderTheme() {
        let root = document.documentElement;

        if (props.theme === 'light') {
            root.style.setProperty('--header-bg', lightTheme.headerBG);
            root.style.setProperty('--header-border', lightTheme.headerBorder);
            root.style.setProperty('--lock-border', lightTheme.lockBorder);
            root.style.setProperty('--lock-background', lightTheme.lockBG);
        } else {
            root.style.setProperty('--header-bg', darkTheme.headerBG);
            root.style.setProperty('--header-border', darkTheme.headerBorder);
            root.style.setProperty('--lock-border', darkTheme.lockBorder);
            root.style.setProperty('--lock-background', darkTheme.lockBG);
        }
    }

    const LoginButton = styled(IconButton)(({ theme }) => ({
        backgroundColor: 'none',
        color:'white',
        top:'-3px',
        margin:'5px',
        fontSize:'30',
        transition:'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(242,242,242,0.3)',
        },
    }));

    renderTheme();

    return (
        <div className="header-line">
            <GiSecretBook className="lock-icon"/>
            <div className="title-text">
                <a href="https://new.huji.ac.il/"
                   style={{color: "white", textDecorationColor:'light' ? lightTheme.headerBG : darkTheme.headerBG}}>
                    Huji Confessions
                </a>
            </div>
            <div className="side-icons">
                <GiNightSky className="night-mode" onClick={changeTheme}
                />
                <span className="space"/>
                <FaFacebook className="facebook-link"
                            onClick={() => window.open("https://www.facebook.com/ConfessionsHUJI/")}/>
                {/*<LoginButton>*/}
                {/*    <RiLoginBoxFill className="login-button" onClick={() => history.push('edrftg')}/>*/}
                {/*</LoginButton>*/}
            </div>
        </div>
    );
}

export default Header;