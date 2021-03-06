import { Card, Box, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import Description from "./Description";
import ElementManager from "./ElementManager";

export default function PaperEditor(props){

    return(
        <Card sx={{ maxWidth: 1, maxHeight: 1 }} >
            <Description description={props.recipie.description}/>
            <Divider/>
            <ElementManager label="Ingrediente" list={props.recipie.ingredients}/>
            <Divider/>
            <ElementManager label="Paso" list={props.recipie.steps}/>
            <Divider/>
            <Box paddingY={2} paddingX={3} display="flex" justifyContent="center" >
                <Button component={Link} to={'/profile/mis-recetas'} size="large" variant="contained" color="error" sx={{ mt: 1, mr: 1 }}>
                    Cancelar 
                </Button>
                <Button component={Link} to={'/profile/mis-recetas'} size="large" variant="contained" color="success" sx={{ mt: 1, mr: 1 }}>
                    Finalizar
                </Button>
            </Box>
        </Card>  
    )
}