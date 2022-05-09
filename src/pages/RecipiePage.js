import { Stack } from '@mui/material'
import RecipieEditor from '../components/ContentBox/RecipieEditor/RecipieEditor'
import Navbar from '../components/Navbar/Navbar'

export default function RecipiePage(props){
    return(
        <div className="Recipie">
            <Navbar subtitle={props.recipie.recipieName} user={props.recipie.user}/>
            <Stack
                direction={"row"}
                justifyContent="space-between"
                padding={4}
                
                bgcolor="contentBackground.main"
            >
                <RecipieEditor recipie={props.recipie}/>
            </Stack>
        </div>
    )
}