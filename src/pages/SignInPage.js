import * as React from 'react';
import { useState } from "react";
import { Navigate} from 'react-router-dom';
import { TextField, Box, Button,Avatar,Link,Typography,Grid,Alert,Paper  } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import RestaurantIcon from '@mui/icons-material/Restaurant';



function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="">
          
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  export default function SignIn(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const subtitle = props.subtitle;


    // User Login info
    const database = [
        {
        username: "Nacho",
        password: "passNacho",
        id: "0"
        },
        {
        username: "MG",
        password: "passMG",
        id: "1"
        }
    ];
    
    const errors = {
        uname: "Username Inválido",
        pass: "Password Inválido"
    };

    const userData = database.find((user) => user.username === username);
  
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        // Find user login info
        

        // Compare user info
        if (userData) {
          if (userData.password !== password) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
            props.setUserId({id:userData.id});
            console.log(userData.id);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
      };
    

      // Generate JSX code for error message
      const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <Alert severity="error"> {errorMessages.message}</Alert>
        );
    
      // JSX code for login form
      const renderForm = (
     <Grid container component="main" sx={{ height: '100vh' }}>
        
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/collection/4651506)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            alignItems: 'center',
          }}
        >
          </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Box flex={4}>
        <Button component={Link} to={"/"} startIcon={<RestaurantIcon/>} color="text">
            <Typography
                variant="h5"
                component="h1"
                sx={{ display: 'block' }}
            >
                Comunidad Cocinera
            </Typography>
        </Button>
        </Box>
          <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h6">Ingresar</Typography>


        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1,alignItems: 'center'}}>

            <TextField
                label="Usuario"
                variant="filled"
                margin="normal"
                fullWidth
                required
                value={username}
                autoFocus
                onChange={e => setUsername(e.target.value)}
            />
            
            <TextField
                label="Contraseña"
                variant="filled"
                margin="normal"
                fullWidth
                type="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            {renderErrorMessage("uname")}
            {renderErrorMessage("pass")}
            
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, mb: 2 }}>
          Ingresar
        </Button>

        <Grid container>
              <Grid item xs>
                <Link href="passrecovery" variant="textBoldColor">
                  Olvidó su contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="registrarse" variant="textLightColor">
                  {"Registrarse"}
                </Link>
              </Grid>
            </Grid>
        </Box>

       
        </Box>
        <Copyright sx={{ mt: 5 }} />
    </Grid>
    </Grid>
      );

      return (
        <div className="App">
          <div className="login-form">
            {isSubmitted ? <Navigate to='home'/>   : renderForm}
          </div>
        </div>
      );
} 