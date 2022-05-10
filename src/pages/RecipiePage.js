import { Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import RecipieEditor from '../components/ContentBox/RecipieEditor/RecipieEditor'
import Navbar from '../components/Navbar/Navbar'
import recipies from '../data/RecipiesData'


export default function RecipiePage(props){

    const { recipieId } = useParams();
    const recipie = recipies.find((recipie) => recipieId === recipie.id);

    return(
        <div className="RecipiePage">
            <Navbar subtitle={recipie.recipieName} user={props.recipie.user}/>
            <Stack
                direction={"row"}
                justifyContent="space-between"
                padding={4}
                
                bgcolor="contentBackground.main"
            >
                <RecipieEditor recipie={recipie}/>
            </Stack>
        </div>
    )
}