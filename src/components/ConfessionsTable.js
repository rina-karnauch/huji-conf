import './ConfessionsTable.css';
import {Grid} from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
                <Grid item xs={2}>
                    <Item>emoji</Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>send confession</Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>type confession...
                        <br></br>
                        <br></br>
                        <br></br>
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