import { Box, } from '@mui/material';
import NestedFilterList from './innerComponents/NestedFilterList';
import { StarRate, FitnessCenter, Timer, SpaOutlined, BrunchDiningOutlined } from '@mui/icons-material';

export default function Sidebar(){
    return(
        <Box
            flex={2}
            flexDirection="column"        
            sx={{ display: { xs: 'none', sm: 'block' },}}
        >
            <NestedFilterList 
                filterName={"Opiniones"} 
                icon={StarRate} 
                options={["*","**","***","****","*****"]}
            />
            <NestedFilterList 
                filterName={"Dificultad"} 
                icon={FitnessCenter} 
                options={["Principiante","Medio","Chef"]}
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
    )
}