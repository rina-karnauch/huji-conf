import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import {Grid} from "@mui/material";
import * as React from "react";

const ConfessionTableTitle = () => {
    return (
        <Grid item xs={12}>
            <div className="confession-box-title">
                <EmailTwoToneIcon/>
                <p className="title">Send a Confession</p>
            </div>
        </Grid>
    );
}

export default ConfessionTableTitle;