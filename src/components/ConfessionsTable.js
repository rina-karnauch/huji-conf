import './ConfessionsTable.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import {Grid} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {styled} from '@mui/material/styles';
import ConfessionTableTitle from "./ConfessionTable/ConfessionTableTitle"
import ConfessionTextField from "./ConfessionTable/ConfessionTextField"
import NumberSwitch from "./ConfessionTable/NumberSwitch";
import {useState, useRef} from "react";

const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText("#4a5465"),
    backgroundColor: "#4a5465",
    '&:hover': {
        backgroundColor: "#85bfd0",
    },
}));

const ConfessionsTable = () => {

    const [confession, setConfession] = useState('');
    const [ID, setID] = useState('');
    const numberSwitchRef = useRef();
    const confessionTextRef = useRef();

    const onSaveConfessionText = (data) => {
        setConfession(data);
    }

    const onCommentToExistingConfession = (data) => {
        setID(data);
    }

    const constructFormData = (confessionJSON) => {
        let formData = new FormData();
        let text = confessionJSON.text;
        if (confessionJSON.isComment) {
            text = "בתגובה ל" + confessionJSON.ID + ": " + text
        }
        formData.append('entry.638196057', text);
        return formData;
    }

    const onSubmission = () => {

        let confessionJSON = {
            text: confession,
            isComment: (ID !== ''),
            ID: ID
        }

        let formData = constructFormData(confessionJSON);

        // into google forms
        fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSd_Fn2K-cqZophaEL4dW8ZRIcHbfok2dhsLjojCP1H5ekTulQ/formResponse",
            {
                body: formData,
                method: 'post',
                mode: 'no-cors'
            });

        // into firebase
        // fetch('https://huji-confessions-default-rtdb.europe-west1.firebasedatabase.app/confessions.json', {
        //     method: 'POST',
        //     body: JSON.stringify(confessionJSON.confessions),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        // clearing data
        numberSwitchRef.current.clear();
        confessionTextRef.current.clear();
        setID('');
        setConfession('');

    }

    return (
        <div className="confessions">
            <Grid container spacing={2}>
                <ConfessionTableTitle/>
                <ConfessionTextField onSaveConfessionText={onSaveConfessionText} ref={confessionTextRef}/>
                <NumberSwitch onCommentToExistingConfession={onCommentToExistingConfession} ref={numberSwitchRef}/>
                <Grid item xs={12}>
                    <ColorButton variant="contained" fullWidth
                                 onClick={onSubmission}
                                 endIcon={<SendIcon/>}
                    >
                        submit
                    </ColorButton>
                </Grid>
            </Grid>
        </div>
    );
}

export default ConfessionsTable;