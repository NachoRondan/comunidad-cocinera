import { List, ListItemIcon, ListItemButton, ListItemText, Collapse, Divider } from "@mui/material"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import React from "react";
import Filter from "./Filter";

export default function NestedFilterList(props){
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return(
        <List
            disablePadding
            sx={{ bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                <props.icon />
                </ListItemIcon>
                <ListItemText primary={props.filterName} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Filter options={props.options}/>
            </Collapse>
            <Divider/>
        </List>
    )
}