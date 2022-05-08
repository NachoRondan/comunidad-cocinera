import { Avatar, Box, Typography, Menu, MenuItem, Divider, ListItemIcon } from "@mui/material"
import { Logout, ListAlt, AccountCircle } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserAvatar(props) {
    
    /*Menu Logic*/
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Box flex={4} sx={{display: "flex", justifyContent: 'flex-end',alignItems: "center", gap:"20px"}}>
            <Typography variant="h6" sx={{display: { xs:"none", md:"block"}}}>
                {props.user.nickname}
            </Typography>
            <Avatar onClick={handleClick} alt={props.user.name} src={require(`../../../assets/${ props.user.avatarUrl }`)}/>
            <Menu
                anchorEl={anchorEl}  
                onClose={handleClose}
                id="account-menu"
                open={open}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem component={Link} to={"/profile/info"}>
                    <ListItemIcon><AccountCircle fontSize="small" /></ListItemIcon>
                    Mi Perfil
                </MenuItem>
                <MenuItem component={Link} to={"/profile/mis-recetas"}>
                    <ListItemIcon><ListAlt fontSize="small" /></ListItemIcon>
                    Mis Recetas
                </MenuItem>
                <Divider />
                <MenuItem component={Link} to={"/"}>
                    <ListItemIcon><Logout fontSize="small" /></ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    )
}