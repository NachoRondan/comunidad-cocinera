import { Grid } from "@mui/material"
import RecipieCard from "./MyRecipie"

export default function RecipieManager(props){
    return(
        <Grid container spacing={3} padding={2}>
            {props.recipies.map(recipie => (
                <Grid item  xs={10} sm={6} md={4}>
                    <RecipieCard recipie={recipie} />
                </Grid>
            ))}
        </Grid>
    )
}