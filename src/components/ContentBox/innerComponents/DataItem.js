import { TextField, Divider, ListItem, ListItemText, Dialog, DialogContentText, DialogTitle, DialogContent, Button, DialogActions } from '@mui/material'
import React from 'react';


export default function DataItem(props){
    var value = props.data

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleModify = () => {
        setOpen(false);
    };

    return(
        <div>
            <ListItem button onClick={handleClickOpen}>
                <ListItemText primaryTypographyProps={{variant:"h6"}} primary={props.title} secondaryTypographyProps={{variant:"subtitle1"}} secondary={value} />
            </ListItem>
            <Divider />
            <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Editar {props.title}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Ingrese su nuev{props.dataGender || "o"} {props.title}
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label={props.title}
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color='error' onClick={handleClose}>Cancelar</Button>
                <Button variant="contained" color='success' onClick={handleModify}>Modificar</Button>
            </DialogActions>
        </Dialog>
      </div>
    )
}