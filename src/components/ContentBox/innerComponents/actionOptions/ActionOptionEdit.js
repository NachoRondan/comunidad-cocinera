import { Box, Typography, IconButton } from "@mui/material"
import { Link } from "react-router-dom";

export default function ActionOption(props){
    return(
        <Box display="flex" flexDirection="row" sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
            <Box flex={9}>
                <Typography variant='h6'>
                    {props.optionTitle}
                </Typography>
            </Box>
            <Box flex={3} sx={{display:"flex", justifyContent:"center"}}>
                <IconButton component={Link} to={`${props.recipieId}`} color="text">
                    <props.icon fontSize='large'/>
                </IconButton>
            </Box>
        </Box>
    )
}