import { Grid } from "@mui/material"
import MyRecipie from "./MyRecipie"

export default function RecipieManager(props){

    return(
        <Grid container spacing={3} padding={2}>
            {props.recipies.map(recipie => (
                <Grid item  xs={12} sm={12} md={12}>
                    <MyRecipie recipie={recipie} />
                </Grid>
            ))}
        </Grid>
    )
}