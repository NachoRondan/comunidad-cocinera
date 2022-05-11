import { TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Box, List, ListItemButton, Divider, ListItemText, ListItemIcon, Button } from '@mui/material';
import { Info, ListAlt, } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import users from '../../data/UsersData';
import React from 'react'

export default function Sidebar(props){

    const user = users.find((user)=>user.id == props.user.id)
    const lastIndex = user.recipiesId[user.recipiesId.length-1]

    const [open, setOpen] = React.useState(false);

    const [auxValue, setAuxValue] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setAuxValue(event.target.value);
    };

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
                <Button onClick={handleClickOpen} color='success' variant='contained'>Nueva Receta</Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            Ingrese el nombre la nueva receta
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    fullWidth
                                    onChange={handleChange}
                                    variant="standard"
                                />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" color="error" onClick={handleClose} autoFocus>
                                Cancelar
                            </Button>
                            <Button variant="contained" color="success" component={Link} to={`/nueva-receta/${auxValue}`} autoFocus>
                                Confirmar
                            </Button>
                        </DialogActions>
                    </Dialog>
            </Box>
        </Box>
    )
}