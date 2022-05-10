import { FormControl, Select, MenuItem, } from "@mui/material"
import React from "react";

export default function OptionListButton(props){
    
    const [value, setValue] = React.useState(props.value);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    return(
        <FormControl size="small" sx={{ m: 1, minWidth: 80 }} color="text">
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="text"
                value={value}
                onChange={handleChange}
            >
                {props.options.map(value=>(
                    <MenuItem value={value}>{value}</MenuItem>    
                ))}
            </Select>
        </FormControl>
    )
}