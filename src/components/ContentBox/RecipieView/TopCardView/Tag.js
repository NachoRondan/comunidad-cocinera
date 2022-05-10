import { Box, Typography, Button } from "@mui/material"

export default function Tag(props){
    
    return(
        <Box display="flex" flexDirection="row" sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
            <Box flex={9}>
                <Typography variant='subtitle1'>
                    {props.title}
                </Typography>
            </Box>
            <Box flex={3} sx={{display:"flex", justifyContent:"center"}}>
                <Button color="text" size="small" variant="outlined">{props.value}</Button>    
            </Box>
        </Box>
        )    
}