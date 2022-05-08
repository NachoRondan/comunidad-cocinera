import { Box, } from "@mui/material";
import Information from "./innerComponents/Information";
import RecipieManager from "./innerComponents/RecipieManager";



export default function ContentBox(props){
    const url = window.location.href;

    if(url.includes("info")){
        return(
            <Box
                padding={2}
                flex={10}
                bgcolor="#E5E5E5"
                height="100vh"
                sx={{display:{xs:"block"}}}
            >
                <Information user={props.user}/>
            </Box>
        )
    }  
    else{
        return(
            <Box
                padding={2}
                flex={10}
                bgcolor="#E5E5E5"
                height="100vh"
                sx={{display:{xs:"block"}}}
            >
                <RecipieManager recipies={props.user.recipies}/>
            </Box>
        )
    }
}