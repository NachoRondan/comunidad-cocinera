import { List, ListItem, ListItemButton, ListItemText, Checkbox,  } from "@mui/material"
import React from "react";

export default function Filter(props){
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };



    return(
      <List dense sx={{ pl: 4, bgcolor: 'background.paper' }}>
        {props.options.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText id={labelId} primary={`${value}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  )
}