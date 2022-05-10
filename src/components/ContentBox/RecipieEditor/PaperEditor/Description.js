import { Box, TextField, Typography } from "@mui/material"
import React from "react";

export default function Description(props){
    const [value, setValue] = React.useState(props.description);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box paddingX={3}>
        <Typography paddingY={1} variant="h2" color="textBold.main" >Descripcion</Typography>
            <Box padding={1} display="flex" flexDirection="column" >
                <Box paddingX={3} maxWidth='1'>
                    <TextField variant="standard" multiline value={value} onChange={handleChange} placeholder="Insertar descripcion..." fullWidth id="fullWidth" />
                </Box>
            </Box>
        </Box>
    )
}