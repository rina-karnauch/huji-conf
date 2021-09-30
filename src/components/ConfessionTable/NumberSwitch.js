import "./NumberSwitch.css"
import React, {useState, useRef} from 'react';
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import {alpha, styled} from '@mui/material/styles';
import {CssTextField} from "./ConfessionTextField";

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

const NumberSwitch = (props) => {

    const [disabled, setDisabled] = useState(true);
    const [text, setText] = useState('');

    function handleConfessionNumberBox() {
        setDisabled(!disabled);
        if (!disabled) {
            setText("");
        }
    }

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
                          disabled={disabled}
                          onChange={(event) => {
                              props.onCommentToExistingConfession(event.target.value);
                              if(!disabled){
                                  setText(event.target.value)
                              }
                          }}
                          value={text}
            />
        </Grid>
    );
}

export default NumberSwitch;