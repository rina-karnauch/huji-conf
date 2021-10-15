import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import {Grid} from "@mui/material";
import * as React from "react";
import {lightTheme} from "../../themes/lightTheme";
import {darkTheme} from "../../themes/darkTheme";

const ConfessionTableTitle = (props) => {
    //title: Send a Confession

    function renderTheme(){
        let root = document.documentElement;

        if (props.theme === 'light') {
            root.style.setProperty('--confession-title-color', lightTheme.confessionTitle);
        } else {
            root.style.setProperty('--confession-title-color', darkTheme.confessionTitle);
        }
    }

    renderTheme();

    return (
        <Grid item xs={12}>
            <div className="confession-box-title">
                {props.icon}
                <p className="title">{props.title}</p>
            </div>
        </Grid>
    );
}

export default ConfessionTableTitle;