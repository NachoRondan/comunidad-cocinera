import { Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import RecipieEditor from '../components/ContentBox/RecipieEditor/RecipieEditor'
import Navbar from '../components/Navbar/Navbar'


export default function RecipiePage(props){

    const { recipieName } = useParams();
    const recipie = {
        id: "100",
        recipieName: recipieName, 
        dificulty: null,
        imageUrl: null,
        rate: null, 
        userId: "1",
        ingredients:[{label:''}],
        steps:[{label:''},],
        description: "", 
        type:"",
        time: "",
        veganDiet: "",
        celiacDiet: ""
    };

    return(
        <div className="RecipiePage">
            <Navbar subtitle={recipieName} user={props.user}/>
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