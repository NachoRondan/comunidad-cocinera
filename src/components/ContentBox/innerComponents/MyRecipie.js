import * as React from 'react';
import { Card, CardHeader, CardMedia, Typography, Box } from '@mui/material';
import { DeleteOutline, PausePresentation, Edit } from '@mui/icons-material';
import ActionOptionRate from './actionOptions/ActionOptionRate';
import ActionOptionEdit from './actionOptions/ActionOptionEdit';
import ActionOptionPause from './actionOptions/ActionOptionPause';
import ActionOptionDelete from './actionOptions/ActionOptionDelete';



export default function RecipieCard(props) {

    return (
        <Card sx={{ maxWidth: 1 }} >
            <CardHeader
                    titleTypographyProps={{
                    fontSize: 22,
                    fontWeight:" bold",
                }}
                title={props.recipie.recipieName}
                
                sx={{ display: { xs: 'block', sm: 'none' },}}
            />
            <Box padding={3} display="flex" flexDirection="row" >
                
                <Box flex={3}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={props.recipie.imageUrl}
                        alt="Paella dish"
                        sx={{ display: { xs: 'none', sm: 'block' },}}
                    />
                    <Box padding={1} bgcolor="primary.main" sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: "center", alignItems:"center"}}> 
                        <Typography variant='subtitle1' fontSize={22}>
                            {props.recipie.recipieName}
                        </Typography>
                    </Box>
                </Box>
                <Box flex={0.5} sx={{ display: { xs: 'none', sm: 'block' },}}></Box>

                <Box flex={6} display="flex" flexDirection="column" padding={3} bgcolor="primary.main" sx={{display:"flex", justifyContent: "space-between"}}> 
                    <ActionOptionRate optionTitle="Calificacion" rate={props.recipie.rate}/>
                    <ActionOptionEdit optionTitle="Editar" recipieId={props.recipie.id} icon={Edit} />
                    <ActionOptionPause optionTitle="Pausar" icon={PausePresentation} />
                    <ActionOptionDelete optionTitle="Eliminar" icon={DeleteOutline} />
                </Box>
            </Box>
        </Card>  
    );
}