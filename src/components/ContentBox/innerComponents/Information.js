import { Box, List, } from "@mui/material";
import DataItem from "./DataItem";

export default function Information(props){
    return(
        <Box bgcolor="white" padding={0}>
            <List 
                disablePadding
            >
                <DataItem title="Nombre" data={props.user.name}/>
                <DataItem title="Apellido" data={props.user.lastname}/>
                <DataItem title="Nickname" data={props.user.nickname}/>
                <DataItem title="Edad" data={props.user.age} dataGender="a"/>
                <DataItem title="Mail" data={props.user.mail}/>
            </List>
        </Box>
    )
}