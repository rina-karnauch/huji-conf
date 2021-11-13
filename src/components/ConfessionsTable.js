import './ConfessionsTable.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import {Grid} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {styled} from '@mui/material/styles';
import ConfessionTextField from "./ConfessionTable/ConfessionTextField"
import NumberSwitch from "./ConfessionTable/NumberSwitch";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import {lightTheme} from "../themes/lightTheme";
import {darkTheme} from "../themes/darkTheme";
import {useState, useRef} from "react";
import ConfessionTableTitle from "./ConfessionTable/ConfessionTableTitle"


const ConfessionsTable = (props) => {

    const [confession, setConfession] = useState('');
    const [ID, setID] = useState('');
    const numberSwitchRef = useRef();
    const confessionTextRef = useRef();
    const formRef = useRef();

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

    function onSubmission() {

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
        color: submitTextHover,
        boxShadow: "none",
        border: "1px solid " + submitBorder,
        borderRadius: "20px",
        backgroundColor: submitButtonBG,
        '&:hover': {
            backgroundColor: submitButtonHoverBG,
            color: submitTextHover,
            boxShadow: "none",
        },
    }));

    return (
        <form ref={formRef}>
            <div className="content-table">
                <Grid container spacing={2}>
                    <ConfessionTableTitle
                        theme={props.theme}
                        title="Send a Confession"
                        icon={<EmailTwoToneIcon/>}/>
                    <ConfessionTextField
                        theme={props.theme}
                        onSaveConfessionText={(data) => {
                            onSaveConfessionText(data);
                        }}
                        ref={confessionTextRef}
                    />
                    <NumberSwitch
                        theme={props.theme}
                        onCommentToExistingConfession={onCommentToExistingConfession}
                        ref={numberSwitchRef}/>
                    <Grid container
                          direction="column"
                          alignItems="flex-end"
                          justify="flex-end">
                        <ColorButton variant="contained"
                                     onClick={() => {
                                         if (formRef.current.reportValidity()) {
                                             onSubmission();
                                         }
                                     }
                                     }
                                     endIcon={<SendIcon/>}>
                            submit
                        </ColorButton>
                    </Grid>

                </Grid>
            </div>
        </form>
    );
}

export default ConfessionsTable;