import * as React from 'react';
import { Card, CardMedia, Box, Input, IconButton, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import TagOption from './TagOption';
import { styled } from '@mui/material/styles';


export default function TopCardEditor(props) {

    const url = window.location.href;
    const Input = styled('input')({
        display: 'none',
      });

    if(!url.includes("nueva")){
        return (
            <Card sx={{ maxWidth: 1, maxHeight: 1 }} >
                <Box padding={1} display="flex" flexDirection="row" >
                    <Box flex={3}>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={props.recipie.imageUrl}
                            sx={{ display: { xs: 'none', sm: 'block' },}}
                        />  
                    </Box>
                    <Box flex={6} display="flex" flexDirection="column" padding={1} paddingLeft={4} bgcolor="primary.main" sx={{display:"flex", justifyContent: "space-between"}}>
                        <TagOption title="Dificultad" value={props.recipie.dificulty} options={[1,2,3,4,5]}/>
                        <TagOption title="Tipo de Comida" value={props.recipie.type} options={["Desayuno", "Almuerzo", "Merienda", "Cena", "Postre"]}/>
                        <TagOption title="Tiempo de preparacion" value="Media Hora" options={["15 minutos", "Media Hora", "Una Hora", "+ de una hora"]}/>
                        <TagOption title="Apto Vegano" value="No" options={["Si", "No"]}/>
                        <TagOption title="Apto Celiacios" value="No" options={["Si", "No"]}/>
                    </Box>
                </Box>
            </Card>  
        );
    }
    else{
        return (
            <Card sx={{ maxWidth: 1, maxHeight: 1 }} >
                <Box padding={1} display="flex" flexDirection="row" >
                    <Box flex={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <IconButton size='large' color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera fontSize='large'/>
                            </IconButton>
                        </label>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                                Upload
                            </Button>
                        </label>
                    </Box>
                    <Box flex={6} display="flex" flexDirection="column" padding={1} paddingLeft={4} bgcolor="primary.main" sx={{display:"flex", justifyContent: "space-between"}}>
                        <TagOption title="Dificultad" value={props.recipie.dificulty} options={[1,2,3,4,5]}/>
                        <TagOption title="Tipo de Comida" value={props.recipie.type} options={["Desayuno", "Almuerzo", "Merienda", "Cena", "Postre"]}/>
                        <TagOption title="Tiempo de preparacion" value={props.recipie.time} options={["15 minutos", "Media Hora", "Una Hora", "+ de una hora"]}/>
                        <TagOption title="Apto Vegano" value={props.recipie.veganDiet} options={["Si", "No"]}/>
                        <TagOption title="Apto Celiacios" value={props.recipie.celiacDiet} options={["Si", "No"]}/>
                    </Box>
                </Box>
            </Card>  
        );
    }    
}