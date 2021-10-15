import * as React from "react";
import {Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import {forwardRef, useImperativeHandle, useState} from "react";
import {lightTheme} from "../../themes/lightTheme";
import {darkTheme} from "../../themes/darkTheme";


const ConfessionTextField = forwardRef((props, ref) => {

    const [confession, setConfession] = useState('');

    // child function so parent could use it.
    useImperativeHandle(ref, () => ({
        clear: () => {
            setConfession("");
        }
    }));

    let textBoxBorder;
    if (props.theme === 'light') {
        textBoxBorder = lightTheme.textBoxBorder;
    } else {
        textBoxBorder = darkTheme.textBoxBorder;
    }

    // styling of text box
    const CssTextField = styled(TextField)({

        '& label': {
            color: textBoxBorder,
        },
        '& label.Mui-focused': {
            color: textBoxBorder,
        },
        '& label.Mui-disabled': {
            color: textBoxBorder,
        },
        '& .MuiInputBase-root': {
            color: textBoxBorder,
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

    return (
        <Grid item xs={12}>
            <CssTextField fullWidth multiline id="fullWidth"
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