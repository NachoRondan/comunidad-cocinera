import { createTheme, } from "@mui/material";
import { blue } from "@mui/material/colors";

/*Variables declaration*/
const primaryColor = "#EFD9C1"
const ratingMainColor = "#007AFF"
const textBoldColor = "#491200"
const textLightColor = "#A07568"
const textBlackColor = "#212121"
const successColor = "#C7D8C6"
const errorColor = "#491200"

/*Actual theme*/
const theme = createTheme({
    palette:{
        primary:{
            main: primaryColor
        },
        rating:{
            main:ratingMainColor
        },
        text:{
            main: textBlackColor,
        },
        textBold:{
            main: textBoldColor,
        },
        success:{
            main: successColor
        },
        error:{
            main: errorColor
        }
    },
    components:{
        MuiToolbar: {
            styleOverrides: {
                root: {
                    display: "flex",
                    justifyContent: "space-between",
                },
            },
        },
    },
});

export default theme