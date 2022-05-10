import { Box, Typography, IconButton, Button, Dialog, DialogContent, DialogTitle, DialogActions, DialogContentText, TextField  } from "@mui/material"
import React from "react";

export default function ActionOption(props){
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Box display="flex" flexDirection="row" sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
            <Box flex={9}>
                <Typography variant='h6'>
                    {props.optionTitle}
                </Typography>
            </Box>
            <Box flex={3} sx={{display:"flex", justifyContent:"center"}}>
                <IconButton onClick={handleClickOpen} color="text">
                    <props.icon fontSize='large'/>
                </IconButton>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Esta seguro/a que quiere elimiar esta receta?"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Una vez eliminada no podra recuperar la receta, ni sus calificaciones.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button variant="contained" color="error" onClick={handleClose} autoFocus>
                        Eliminar
                    </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    )
}