import { Box, Typography } from "@mui/material"
import ListView from "./ListView"

export default function(props){
    return(
        <Box>
        <Typography paddingX={3} variant="h2" color="textBold.main" >{props.label}s</Typography>
            <Box padding={1} display="flex" flexDirection="column" >
                <Box paddingX={3} maxWidth='1'>
                    <ListView label={props.label} list={props.list}/>
                </Box>
            </Box>
        </Box>
    )
}