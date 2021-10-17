import "./NumberSwitch.css"
import React, {forwardRef, useState, useImperativeHandle} from 'react';
import Grid from "@mui/material/Grid";
import {lightTheme} from "../../themes/lightTheme";
import {darkTheme} from "../../themes/darkTheme";
import {alpha, styled} from '@mui/material/styles';
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import {makeStyles} from "@mui/styles";


const label = {inputProps: {'aria-label': 'confession number switch'}};

// styling of switch
const CostumedSwitch = styled(Switch)(({theme}) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: "#3e505f",
        "&:hover": {
            backgroundColor: alpha("#45717d", theme.palette.action.hoverOpacity)
        }
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#45717d"
    },
    "& .MuiSwitch-switchBase": {
        color: "#c1c6c9"
    },
    "& .MuiSwitch-track": {
        backgroundColor: "#859099"
    }
}));

// styling of text box
const useStyles = makeStyles({
    cssTextField: props => ({
        '& label': {
            color: props.labelColor,
        },
        '& label.Mui-focused': {
            color: props.labelColor,
        },
        '& label.Mui-disabled': {
            color: props.textBoxBorder,
        },
        '& .MuiInputBase-root': {
            color: props.labelColor,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: props.textBoxBorder,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: props.textBoxBorder,
            },
            '&:hover fieldset': {
                borderColor: props.textBoxBorder,
            },
            '&.Mui-focused fieldset': {
                borderColor: props.textBoxBorder,
            },
            '&.Mui-disabled fieldset': {
                borderColor: props.textBoxBorder,
            }
        },
    }),
});

// component
const NumberSwitch = forwardRef((props, ref) => {

    const [disabled, setDisabled] = useState(true);
    const [text, setText] = useState('');

    // handling disabling and abling number box
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

    // handling typing in text box
    function onChangeOfTextBox(event) {
        if (!disabled) {
            setText(event.target.value);
        } else {
            setText('');
        }
        props.onCommentToExistingConfession(event.target.value);

    }

    // colors for theme and for text box
    let textBoxBorder, labelColor;

    // changing colors
    function renderTheme() {
        let root = document.documentElement;

        if (props.theme === 'light') {
            root.style.setProperty('--switch-text', lightTheme.switchTextColor);
            textBoxBorder = lightTheme.textBoxBorder;
            labelColor = lightTheme.labelColor
        } else {
            root.style.setProperty('--switch-text', darkTheme.switchTextColor);
            textBoxBorder = darkTheme.textBoxBorder;
            labelColor = darkTheme.labelColor
        }
    }

    // changing colors to current theme
    renderTheme();

    // props to cssButton styling
    // its not inside because of the "onChange" rendring each time
    const classes = useStyles({labelColor: labelColor, textBoxBorder: textBoxBorder});

    return (
        <Grid container
              justifyContent="center"
              alignItems="center"
              className="switch-box"
        >
            <p className="switch-text">comment for an existing confession?</p>
            <CostumedSwitch {...label}
                            onChange={(event) => handleConfessionNumberBox(event)}/>
            <TextField
                className={classes.cssTextField}
                id="outlined-basic"
                label="* number"
                variant="outlined"
                type="number"
                disabled={disabled}
                onChange={(event) => onChangeOfTextBox(event)}
                value={text}
            />
        </Grid>
    );
});

export default NumberSwitch;