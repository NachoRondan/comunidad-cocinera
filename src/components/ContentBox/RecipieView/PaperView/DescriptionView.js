import { Box, FormControl, Select, MenuItem, Typography } from "@mui/material"
import Rate from '../../Feed/innerComponents/Rate'
import React from "react";

export default function Description(props){
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box paddingX={3} display="flex" flexDirection="row">
            <Box flex={6}>
                <Typography paddingY={1} variant="h2" color="textBold.main" >Descripcion</Typography>
                <Box padding={1} display="flex" flexDirection="column" >
                    <Box paddingX={3} maxWidth='1'>
                        <Typography variant="subtitle1">{props.description}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box flex={6}>
                <Typography paddingY={1} paddingX={7} variant="h2" color="textBold.main" >Tu Calificacion</Typography>
                <Box padding={1} display="flex" flexDirection="column" >
                    <Box paddingX={5.5} display="flex" justifyContent="flex-end" maxWidth='1'>
                        <FormControl size="small" sx={{ m: 1, minWidth: 80 }} color="text">
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color="text"
                                value={value}
                                onChange={handleChange}
                            >
                                    <MenuItem value={1}> <Rate rating={1}/> </MenuItem>    
                                    <MenuItem value={2}> <Rate rating={2}/> </MenuItem>  
                                    <MenuItem value={3}> <Rate rating={3}/> </MenuItem>  
                                    <MenuItem value={4}> <Rate rating={4}/> </MenuItem>  
                                    <MenuItem value={5}> <Rate rating={5}/> </MenuItem>  
                                </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}