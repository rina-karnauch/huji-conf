import './ConfessionsTable.css';
import * as React from 'react';

import {Grid} from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ConfessionsTable = () => {
    return (
        <div className="confessions">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="confession-box-title">
                        <EmailTwoToneIcon/>
                        <p className="title">Send a Confession</p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Item>type confession...
                        <br/>
                        <br/>
                        <br/>
                        <br></br>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>comment?</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>number insertion</Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>submit</Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default ConfessionsTable;