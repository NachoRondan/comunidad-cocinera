import { Box, Button, SwipeableDrawer } from '@mui/material';
import NestedFilterList from './innerComponents/NestedFilterList';
import { FitnessCenter, Timer, SpaOutlined, BrunchDiningOutlined } from '@mui/icons-material';
import React from 'react';

export default function Sidebar(){
    const [state, setState] = React.useState({
        
        left: false,
        });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

    setState({ ...state, [anchor]: open });
    };

    return(
        <div>
            <Box 
                flex={2}
                flexDirection="column"        
                sx={{ display: { xs: 'none', sm: 'block' },}}
            >
                <NestedFilterList 
                    filterName={"Dificultad"} 
                    icon={FitnessCenter} 
                    options={["1","2","3","4","5"]}
                />
                <NestedFilterList 
                    filterName={"Tiempo de Preparacion"} 
                    icon={Timer} 
                    options={["15 minutos","30 minutos","1 hora","+ de 1 Hora"]}
                />
                <NestedFilterList 
                    filterName={"Tipo de Dieta"} 
                    icon={SpaOutlined} 
                    options={["Vegana","Sin Tac"]}
                />
                <NestedFilterList 
                    filterName={"Tipo de Comida"} 
                    icon={BrunchDiningOutlined} 
                    options={["Desayuno","Almuerzo","Merienda","Cena","Postres","Cafeteria"]}
                />
            </Box>
            <Box bgcolor="error" padding={1} sx={{ display: { xs: 'block', sm: 'none' },}}>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                    <Button color="success" variant="contained" onClick={toggleDrawer(anchor, true)}>|||</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        <Box
                            flex={2}
                            flexDirection="column"        
                        >
                            <NestedFilterList 
                                filterName={"Dificultad"} 
                                icon={FitnessCenter} 
                                options={["1","2","3","4","5"]}
                            />
                            <NestedFilterList 
                                filterName={"Tiempo de Preparacion"} 
                                icon={Timer} 
                                options={["15 minutos","30 minutos","1 hora","+ de 1 Hora"]}
                            />
                            <NestedFilterList 
                                filterName={"Tipo de Dieta"} 
                                icon={SpaOutlined} 
                                options={["Vegana","Sin Tac"]}
                            />
                            <NestedFilterList 
                                filterName={"Tipo de Comida"} 
                                icon={BrunchDiningOutlined} 
                                options={["Desayuno","Almuerzo","Merienda","Cena","Postres","Cafeteria"]}
                            />
                        </Box>
                    </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </Box>
          </div>

    )
}