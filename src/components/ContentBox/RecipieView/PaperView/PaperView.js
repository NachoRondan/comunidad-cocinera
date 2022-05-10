import { Card, Divider } from "@mui/material";
import DescriptionView from "./DescriptionView";
import ElementView from "./ElementView";

export default function PaperView(props){

    return(
        <Card sx={{ maxWidth: 1, maxHeight: 1 }} >
            <DescriptionView description={props.recipie.description}/>
            <Divider/>
            <ElementView label="Ingrediente" list={props.recipie.ingredients}/>
            <Divider/>
            <ElementView label="Paso" list={props.recipie.steps}/>
            <Divider/>
        </Card>  
    )
}