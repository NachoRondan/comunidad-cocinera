import { Typography, Button, Box, } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link } from "react-router-dom";

export default function Title() {
    return(
        <Box flex={4}>
        <Button component={Link} to={"/home"} startIcon={<RestaurantIcon/>} color="text">
            <Typography
                variant="subtitle1"
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                Comunidad Cocinera
            </Typography>
        </Button>
        </Box>
    )    
}