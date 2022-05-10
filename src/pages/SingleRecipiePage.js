import { Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import RecipieView from '../components/ContentBox/RecipieView/RecipieView'
import Navbar from '../components/Navbar/Navbar'
import recipies from '../data/RecipiesData'

export default function SingleRecipiePage(props){
    
    const { recipieId } = useParams()
    const recipie = recipies.find((recipie) => recipieId === recipie.id);
    
    return(
        <div className="Recipie">
            <Navbar subtitle={recipie.recipieName} user={props.user}/>
            <Stack
                direction={"row"}
                justifyContent="space-between"
                padding={4}
                bgcolor="contentBackground.main"
            >
                {<RecipieView recipie={recipie}/>}
            </Stack>
        </div>
    )
}