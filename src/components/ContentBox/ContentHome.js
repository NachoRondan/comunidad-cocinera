import { Box } from "@mui/material";
import Feed from "./Feed/Feed";

export default function ContentBox(props){
    return(
        <Box
            flex={10}
            bgcolor="#E5E5E5"
            sx={{display:{xs:"block"}, justifyContent:"center"}}
        >
            <Feed feed={props.feed}/>
        </Box>
    )
}