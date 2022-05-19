import { Box, InputBase, Typography } from "@mui/material";
import { styled,  } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';




export default function MiddleSection(props) {

  const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "white",
      '&:hover': {
        backgroundColor: "#EDEDED",
      },
      marginRight: theme.spacing(10),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
  }));
    
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const url = window.location.href;

  if(url.includes("home")){
    return(
      
      <Box flex={4}>
          <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
              />
              
          </Search>
          </Box>

    );
  }
  else{
    return(
      <Typography variant="h6">{props.subtitle}</Typography>
    )
  }
}