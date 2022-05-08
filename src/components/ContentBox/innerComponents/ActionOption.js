import { Box, Typography } from "@mui/material"
import Rate from '../Feed/innerComponents/Rate';

export default function ActionOption(props){
    if(props.rate){
        return(
            <Box display="flex" flexDirection="row" sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
                <Typography variant='h6'>
                    Calificacion
                </Typography>
                <Rate rating={props.rate}/>
            </Box>
        )
    }
    else{
        return(
            <Box display="flex" flexDirection="row" sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
                <Typography variant='h6'>
                    {props.optionTitle}
                </Typography>
                <props.icon fontSize='large'/>
            </Box>
        )
    }

}