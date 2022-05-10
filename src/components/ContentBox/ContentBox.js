import { Box, } from "@mui/material";
import Information from "./innerComponents/Information";
import RecipieManager from "./innerComponents/RecipieManager";
import recipies from "../../data/RecipiesData";


export default function ContentBox(props){
    const url = window.location.href;
    const userRecipies = recipies.filter((recipie) => props.user.recipiesId.includes(recipie.id) );

    if(url.includes("info")){
        return(
            <Box
                padding={2}
                flex={10}
                bgcolor="contentBackground.main"
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
                bgcolor="contentBackground.main"
                sx={{display:{xs:"block"}}}
            >
                <RecipieManager recipies={userRecipies}/>
            </Box>
        )
    }
}