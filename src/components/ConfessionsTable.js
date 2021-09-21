import './ConfessionsTable.css';
import * as React from 'react';

import ConfessionTableTitle from "./ConfessionTable/ConfessionTableTitle"
import ConfessionTextField from "./ConfessionTable/ConfessionTextField"

import {Grid} from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import NumberSwitch from "./ConfessionTable/NumberSwitch";



// item styling
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
                <ConfessionTableTitle/>
                <ConfessionTextField/>
                <NumberSwitch/>
                <Grid item xs={12}>
                    <Item>submit</Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default ConfessionsTable;