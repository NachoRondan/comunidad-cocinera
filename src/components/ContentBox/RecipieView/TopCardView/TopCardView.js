import * as React from 'react';
import { Card, CardMedia, Box, Typography } from '@mui/material';
import Tag from './Tag';
import { PortableWifiOffSharp } from '@mui/icons-material';

export default function TopCardView(props){
    return(
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
                    <Tag title="Dificultad" value={props.recipie.dificulty} options={[1,2,3,4,5]}/>
                    <Tag title="Tipo de Comida" value="Almuerzo" options={["Desayuno", "Almuerzo", "Merienda", "Cena", "Postre"]}/>
                    <Tag title="Tiempo de preparacion" value="Media Hora" options={["15 minutos", "Media Hora", "Una Hora", "+ de una hora"]}/>
                    <Tag title="Apto Vegano" value="No" options={["Si", "No"]}/>
                    <Tag title="Apto Celiacios" value="No" options={["Si", "No"]}/>
                </Box>
            </Box>
        </Card>
    )
}