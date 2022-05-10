import { Box, Typography, Checkbox } from "@mui/material"
import OptionListButton from "./OptionListButton"

export default function DificultyOption(props){
    
    return(
        <Box display="flex" flexDirection="row" sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
            <Box flex={9}>
                <Typography variant='subtitle1'>
                    {props.title}
                </Typography>
            </Box>
            <Box flex={3} sx={{display:"flex", justifyContent:"center"}}>
                <OptionListButton title={props.title} value={props.value} options={props.options}/>
            </Box>
        </Box>
        )    
}