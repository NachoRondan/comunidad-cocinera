import { Box, Typography, IconButton,  } from "@mui/material"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import React from "react"

export default function ActionOption(props){
    const [paused, setPaused] = React.useState(false);

    const handleClick = () => {
        setPaused(!paused);
    };

    if(paused){
        return(
            <Box display="flex" flexDirection="row" sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
                <Box flex={9}>
                    <Typography variant='h6'>
                        Reanudar
                    </Typography>
                </Box>
                <Box flex={3} sx={{display:"flex", justifyContent:"center"}}>
                    <IconButton onClick={handleClick} color="text">
                        <PlayCircleOutlineIcon fontSize='large'/>
                    </IconButton>
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
                    <IconButton onClick={handleClick} color="text">
                        <props.icon fontSize='large'/>
                    </IconButton>
                </Box>
            </Box>
        )
    }
    
    
}