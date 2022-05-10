import { Box, TextField, Typography } from "@mui/material"
import React from "react";

export default function Description(props){
    
    return (
        <Box paddingX={3}>
        <Typography paddingY={1} variant="h2" color="textBold.main" >Descripcion</Typography>
            <Box padding={1} display="flex" flexDirection="column" >
                <Box paddingX={3} maxWidth='1'>
                    <Typography variant="subtitle1">{props.description}</Typography>
                </Box>
            </Box>
        </Box>
    )
}