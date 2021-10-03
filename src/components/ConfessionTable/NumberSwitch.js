import "./NumberSwitch.css"
import React, {forwardRef, useState, useImperativeHandle} from 'react';
import Grid from "@mui/material/Grid";
import {CssTextField} from "./ConfessionTextField";
import {alpha, styled} from '@mui/material/styles';
import Switch from "@mui/material/Switch";

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

    function handleConfessionNumberBox() {
        setDisabled(!disabled);
    }

    useImperativeHandle(ref, () => ({
        clear: () => {
            setText("");
            if (disabled) {
                setDisabled(true);
            } else {
                setDisabled(false);
            }
            console.log("cleared number!");
        }
    }));

    return (
        <Grid container
              justifyContent="center"
              alignItems="center"
              className="switch-box"
        >
            <p className="switch-text">comment for an existing confession?</p>
            <CostumedSwitch {...label}
                            onChange={handleConfessionNumberBox}/>
            <CssTextField id="outlined-basic"
                          label="* number"
                          variant="outlined"
                          className="text-field"
                          type="number"
                          disabled={disabled}
                          onChange={(event) => {
                              if (!disabled) {
                                  setText(event.target.value);
                              }
                              props.onCommentToExistingConfession(event.target.value);
                          }}
                          value={text}
            />
        </Grid>
    );
});

export default NumberSwitch;