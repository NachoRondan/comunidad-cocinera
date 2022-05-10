import { Stack } from '@mui/material'
import RecipieView from '../components/ContentBox/RecipieView/RecipieView'
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
                <RecipieView recipie={props.recipie}/>
            </Stack>
        </div>
    )
}