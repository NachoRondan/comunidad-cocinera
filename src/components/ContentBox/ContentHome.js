import { Box } from "@mui/material";
import Feed from "./Feed/Feed";

export default function ContentBox(props){
    return(
        <Box
            
            flex={10}
            bgcolor="contentBackground.main"
            sx={{display:{xs:"block"}, justifyContent:"center"}}
        >
            <Feed feed={props.feed}/>
        </Box>
    )
}