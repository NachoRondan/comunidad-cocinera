import * as React from 'react';
import { Card, CardHeader, CardMedia, Typography, Box } from '@mui/material';
import TagOption from './TopCardOptions/TagOption';


export default function TopCardEditor(props) {
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
                    <TagOption title="Tipo de Comida" value="Almuerzo" options={["Desayuno", "Almuerzo", "Merienda", "Cena", "Postre"]}/>
                    <TagOption title="Tiempo de preparacion" value="Media Hora" options={["15 minutos", "Media Hora", "Una Hora", "+ de una hora"]}/>
                    <TagOption title="Apto Vegano" value="No" options={["Si", "No"]}/>
                    <TagOption title="Apto Celiacios" value="No" options={["Si", "No"]}/>
                </Box>
            </Box>
        </Card>  
    );
}