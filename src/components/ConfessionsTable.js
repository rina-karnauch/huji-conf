import './ConfessionsTable.css';
import * as React from 'react';

import ConfessionTableTitle from "./ConfessionTable/ConfessionTableTitle"
import ConfessionTextField from "./ConfessionTable/ConfessionTextField"

import {Grid} from "@mui/material";
import NumberSwitch from "./ConfessionTable/NumberSwitch";
import {useState} from "react";



// // item styling
// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const ConfessionsTable = () => {

    const [confession, setConfession] = useState('');
    const [ID, setID] = useState('');

    const onSaveConfessionText = (data) => {
        setConfession(data);
    }

    const onCommentToExistingConfession = (data) => {
        setID(data);
    }

    const printConfession = () => {
        console.log("Confession Text:" + confession);
    }

    const printID = () => {
        console.log("ID:" + ID);
    }

    const onButtonClick =() =>{
        printConfession();
        if(ID){
            printID();
        }
        else{
            console.log("not a comment");
        }
    }

    return (
        <div className="confessions">
            <Grid container spacing={2}>
                <ConfessionTableTitle/>
                <ConfessionTextField onSaveConfessionText={onSaveConfessionText}/>
                <NumberSwitch onCommentToExistingConfession={onCommentToExistingConfession}/>
                <Grid item xs={12}>
                    <button onClick={onButtonClick}>
                        submit
                    </button>
                </Grid>
            </Grid>
        </div>
    );
}

export default ConfessionsTable;