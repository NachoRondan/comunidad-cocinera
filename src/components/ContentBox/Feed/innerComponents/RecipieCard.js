import * as React from 'react';
import { Card, CardHeader, CardMedia, Typography, Box } from '@mui/material';
import Rate from './Rate';
import { Link } from 'react-router-dom';

export default function RecipieCard(props) {
    return (
        <Box sx={{ textDecoration: 'none' }} component={Link} to={"receta"}>
        <Card sx={{ maxWidth: 1 }}>
            <CardHeader
                titleTypographyProps={{
                    fontSize: 22,
                    fontWeight:" bold",
                }}
                title={props.recipie.recipieName}
            />
            <CardMedia
                component="img"
                height="194"
                image={props.recipie.imageUrl}
                alt="Paella dish"
            />
            <Box padding={1} bgcolor="primary.main" sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}> 
                <Typography variant='h6'>
                    Calificacion
                </Typography>
                <Rate rating={props.recipie.rate}/>
            </Box>
        </Card>
        </Box>
    );
}