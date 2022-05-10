import { Box, List, ListItemButton, Divider, ListItemText, ListItemIcon, Button } from '@mui/material';
import { Info, ListAlt, } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar(){
    return(
        <Box
            flex={2}
            flexDirection="column" 
            sx={{ display: { xs: 'none', sm: 'block' },}}
        >
            <List sx={{ bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader">
                <ListItemButton component={Link} to={"/profile/info"}>
                    <ListItemIcon>
                        <Info />
                    </ListItemIcon>
                    <ListItemText primary="Mis Datos"/>
                </ListItemButton>
                <Divider/>
                <ListItemButton component={Link} to={"/profile/mis-recetas"}>
                    <ListItemIcon>
                        <ListAlt />
                    </ListItemIcon>
                    <ListItemText primary="Mis Recetas"/>
                </ListItemButton>
                <Divider/>
            </List>
            <Box justifyContent="center"  display='flex'>
                <Button color='success' variant='contained'> Nueva Receta</Button>
            </Box>
        </Box>
    )
}