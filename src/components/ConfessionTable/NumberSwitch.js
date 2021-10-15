import "./NumberSwitch.css"
import React, {forwardRef, useState, useImperativeHandle} from 'react';
import Grid from "@mui/material/Grid";
import {lightTheme} from "../../themes/lightTheme";
import {darkTheme} from "../../themes/darkTheme";
import {alpha, styled} from '@mui/material/styles';
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";


const label = {inputProps: {'aria-label': 'confession number switch'}};

const CostumedSwitch = styled(Switch)(({theme}) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: "#84bcd4",
        "&:hover": {
            backgroundColor: alpha("#84bcd4", theme.palette.action.hoverOpacity)
        }
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#84bcd4"
    }
}));

const NumberSwitch = forwardRef((props, ref) => {

    const [disabled, setDisabled] = useState(true);
    const [text, setText] = useState('');

    let textBoxBorder = props.theme === 'light' ? lightTheme.textBoxBorder : darkTheme.textBoxBorder;
    // styling of text box
    const CssTextField = styled(TextField)({

        '& label': {
            color:textBoxBorder,
        },
        '& label.Mui-focused': {
            color: textBoxBorder,
        },
        '& label.Mui-disabled': {
            color: textBoxBorder,
        },
        '& .MuiInputBase-root': {
            color:textBoxBorder,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: textBoxBorder,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: textBoxBorder,
            },
            '&:hover fieldset': {
                borderColor: textBoxBorder,
            },
            '&.Mui-focused fieldset': {
                borderColor: textBoxBorder,
            },
            '&.Mui-disabled fieldset': {
                borderColor: textBoxBorder,
            }
        },
    });

    function handleConfessionNumberBox(event) {
        setDisabled(!disabled);
        onChangeOfTextBox(event);
    }

    // child function so parent could use it.
    useImperativeHandle(ref, () => ({
        clear: () => {
            setText("");
            if (disabled) {
                setDisabled(true);
            } else {
                setDisabled(false);
            }
        }
    }));

    function onChangeOfTextBox(event) {
        if (!disabled) {
            setText(event.target.value);
        } else {
            setText('');
        }
        props.onCommentToExistingConfession(event.target.value);
    }

    return (
        <Grid container
              justifyContent="center"
              alignItems="center"
              className="switch-box"
        >
            <p className="switch-text">comment for an existing confession?</p>
            <CostumedSwitch {...label}
                            onChange={(event) => handleConfessionNumberBox(event)}/>
            <CssTextField id="outlined-basic"
                          label="* number"
                          variant="outlined"
                          className="text-field"
                          type="number"
                          disabled={disabled}
                          onChange={(event) => onChangeOfTextBox(event)}
                          value={text}
            />
        </Grid>
    );
});

export default NumberSwitch;