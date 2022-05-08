import { Box, Typography, IconButton } from "@mui/material"
import Rate from '../Feed/innerComponents/Rate';

export default function ActionOption(props){
    if(props.rate){
        return(
            <Box display="flex" flexDirection="row" sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
                <Box flex={9}>
                    <Typography variant='h6'>
                        {props.optionTitle}
                    </Typography>
                </Box>
                <Box flex={3} sx={{display:"flex", justifyContent:"center"}}>
                    <Rate rating={props.rate}/>
                </Box>
            </Box>
        )
    }
    else{
        return(
            <Box display="flex" flexDirection="row" sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
                <Box flex={9}>
                    <Typography variant='h6'>
                        {props.optionTitle}
                    </Typography>
                </Box>
                <Box flex={3} sx={{display:"flex", justifyContent:"center"}}>
                    <IconButton color="text">
                        <props.icon fontSize='large'/>
                    </IconButton>
                </Box>
            </Box>
        )
    }

}