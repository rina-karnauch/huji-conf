import "./NumberSwitch.css"
import * as React from "react";
import {useState} from "react";

import { alpha, styled } from '@mui/material/styles';

import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

import {CssTextField} from "./ConfessionTextField";

const label = "is this a comment for an existing confession?";

const CostumedSwitch = styled(Switch)(({ theme }) => ({
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

const handleChange = (event) => {
    console.log("5");
};

const NumberSwitch = () => {

    const [disabled, setDisabled] = useState("");

    return (
        <Grid container
              justifyContent="center"
              alignItems="center"
              className="switch-box"
        >
            <p className="switch-text">comment for an existing confession?</p>
            <CostumedSwitch {...label}
                            onChange={handleChange}/>
            <CssTextField id="outlined-basic"
                          label="* number"
                          variant="outlined"
                          className="text-field"
                          disabled="disabled"/>
        </Grid>
    );
}

export default NumberSwitch;