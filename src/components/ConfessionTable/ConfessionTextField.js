import * as React from "react";
import {Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import {forwardRef, useImperativeHandle, useState} from "react";

// styling of text box
export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#4a5465',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#dbdbdb',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#dbdbdb',
        },
        '&:hover fieldset': {
            borderColor: '#dbdbdb',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#4a5465',
        },
    },
});

const ConfessionTextField = forwardRef((props, ref) => {

    const [confession, setConfession] = useState('');

    // child function so parent could use it.
    useImperativeHandle(ref, () => ({
        clear: () => {
            setConfession("");
            console.log("cleared confession!");
        }
    }));

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