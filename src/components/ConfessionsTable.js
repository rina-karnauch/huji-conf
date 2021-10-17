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
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import {lightTheme} from "../themes/lightTheme";
import {darkTheme} from "../themes/darkTheme";


const ConfessionsTable = (props) => {

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
        //
        // // into firebase
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

        console.log("im here in change of submition");

    }


    let submitButtonBG, submitButtonHoverBG, confessionTitle, submitTextHover, submitBorder;

    function renderTheme() {
        let root = document.documentElement;

        if (props.theme === 'light') {
            root.style.setProperty('--confession-table-bg', lightTheme.confessionBG);
            root.style.setProperty('--confession-table-border', lightTheme.confessionBorder);
            root.style.setProperty('--confession-table-title', lightTheme.confessionTitle);
            submitButtonBG = lightTheme.submitButtonBG;
            submitButtonHoverBG = lightTheme.submitButtonHoverBG;
            confessionTitle = lightTheme.confessionTitle;
            submitTextHover = lightTheme.submitTextHover;
            submitBorder = lightTheme.submitBorder;
        } else {
            root.style.setProperty('--confession-table-bg', darkTheme.confessionBG);
            root.style.setProperty('--confession-table-border', darkTheme.confessionBorder);
            root.style.setProperty('--confession-table-title', darkTheme.confessionTitle);
            submitButtonBG = darkTheme.submitButtonBG;
            submitButtonHoverBG = darkTheme.submitButtonHoverBG;
            confessionTitle = darkTheme.confessionTitle;
            submitTextHover = darkTheme.submitTextHover;
            submitBorder = darkTheme.submitBorder;
        }
    }

    renderTheme();

    const ColorButton = styled(Button)(({theme}) => ({
        color: confessionTitle,
        boxShadow: "none",
        border: "1px solid " + submitBorder,
        backgroundColor: submitButtonBG,
        '&:hover': {
            backgroundColor: submitButtonHoverBG,
            color: submitTextHover,
            boxShadow: "none",
        },
    }));

    return (
        <div className="content-table">
            <Grid container spacing={2}>
                <ConfessionTableTitle
                    theme={props.theme}
                    title="Send a Confession"
                    icon={<EmailTwoToneIcon/>}/>
                <ConfessionTextField
                    theme={props.theme}
                    onSaveConfessionText={() => {
                        onSaveConfessionText();
                        console.log("im here in change of textBox");
                    }}
                    ref={confessionTextRef}/>
                <NumberSwitch
                    theme={props.theme}
                    onCommentToExistingConfession={onCommentToExistingConfession}
                    ref={numberSwitchRef}/>
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