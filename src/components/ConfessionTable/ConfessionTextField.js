import * as React from "react";
import {Grid} from "@mui/material";
import {makeStyles} from '@mui/styles';
import TextField from "@mui/material/TextField";
import {forwardRef, useImperativeHandle, useState} from "react";
import {lightTheme} from "../../themes/lightTheme";
import {darkTheme} from "../../themes/darkTheme";

// styling of cssButton
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

const ConfessionTextField = forwardRef((props, ref) => {

    const [confession, setConfession] = useState('');

    // child function so parent could use it.
    useImperativeHandle(ref, () => ({
        clear: () => {
            setConfession("");
        }
    }));

    // theme related
    let textBoxBorder, labelColor;
    if (props.theme === 'light') {
        textBoxBorder = lightTheme.textBoxBorder;
        labelColor = lightTheme.labelColor;
    } else {
        textBoxBorder = darkTheme.textBoxBorder;
        labelColor = darkTheme.labelColor;
    }

    // props to cssButton styling
    // its not inside because of the "onChange" rendring each time
    const classes = useStyles({labelColor: labelColor, textBoxBorder: textBoxBorder});

    return (
        <Grid item xs={12}>
            <TextField className={classes.cssTextField}
                       fullWidth multiline
                       id="fullWidth"
                       labelColor={labelColor}
                       textBoxBorder={textBoxBorder}
                       size="medium"
                       rows={4}
                       label="write what's on your mind"
                       variant="outlined"
                       value={confession}
                       name="entry.638196057"
                       onChange={(event) => {
                           setConfession(event.target.value)
                           props.onSaveConfessionText(event.target.value)
                       }}
            />
        </Grid>
    );
});

export default ConfessionTextField;