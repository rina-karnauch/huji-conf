
import * as React from "react";
import {Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";

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

const ConfessionTextField = () => {
    return (
        <Grid item xs={12}>
            <CssTextField fullWidth multiline id="fullWidth"
                          size="medium"
                          rows={4}
                          label="write what's on your mind"
                          variant="outlined"/>
        </Grid>
    );
}

export default ConfessionTextField;