import { Grid } from "@mui/material";
import RecipieCard from "./innerComponents/RecipieCard";
import recipies from '../../../data/RecipiesData'

export default function(){
    
    return(
        <Grid container spacing={3} padding={2}>
            {recipies.map(recipie => (
                <Grid item  xs={10} sm={6} md={4}>
                    <RecipieCard recipie={recipie} />
                </Grid>
            ))}
        </Grid>
    )
}