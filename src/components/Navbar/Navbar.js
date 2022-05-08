import { AppBar, Toolbar } from "@mui/material";
import Title from './innerComponents/Title'
import UserAvatar from './innerComponents/UserAvatar'
import MiddleSection from "./innerComponents/MiddleSection";

export default function Navbar(props) {
    return(
        <AppBar position="sticky">
            <Toolbar>
                <Title/>
                <MiddleSection subtitle={props.subtitle}/>
                <UserAvatar user={props.user}/>
            </Toolbar>
            
        </AppBar>
    );
}