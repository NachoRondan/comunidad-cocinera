import { StarRate } from "@mui/icons-material";
import { Box, } from "@mui/material";


export default function Rate(props){
    const auxList = Array(Math.round(props.rating)).fill()

    return(
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "Center", alignItems: "Center"}}>
            {auxList.map(x => (
                    <StarRate color="rating" />
            ))}
        </Box>
    )
}