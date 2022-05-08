import Navbar from "../components/Navbar/Navbar"
import { Stack } from "@mui/material"
import Sidebar from "../components/Sidebar/Sidebar"
import ContentBox from "../components/ContentBox/ContentBox"

export default function Profile(props){
    
    return(
        <div className="App">
            <Navbar subtitle={props.subtitle} user={props.user}/>
            <Stack
                direction={"row"}
                justifyContent="space-between"
            >
                <Sidebar/>
                <ContentBox user={props.user}/>
            </Stack>
        </div>
    )

}