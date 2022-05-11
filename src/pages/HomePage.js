import Navbar from "../components/Navbar/Navbar"
import { Stack } from "@mui/material"
import SidebarHome from "../components/Sidebar/SidebarHome"
import ContentBox from "../components/ContentBox/ContentHome"

export default function HomePage(props){
    return(
        <div className="App">
            <Navbar user={props.user}/>
            <Stack
                direction={"row"}
                justifyContent="space-between"
            >
                <SidebarHome />
                <ContentBox feed={props.feed}/>
            </Stack>
        </div>
    )
}