import * as React from 'react';
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { TextField, Box, Button,Container,Avatar,Link,Typography,Grid,Alert  } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="">
          Acerca de
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // User Login info
    const database = [
        {
        username: "Nacho",
        password: "passNacho"
        },
        {
        username: "user2",
        password: "pass2"
        }
    ];
    
    const errors = {
        uname: "Username Inválido",
        pass: "Password Inválido"
    };
  
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        // Find user login info
        const userData = database.find((user) => user.username === username);
        // Compare user info
        if (userData) {
          if (userData.password !== password) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
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
        <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1,alignItems: 'center'}}>

            <TextField
                label="Username"
                variant="filled"
                margin="normal"
                fullWidth
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            {renderErrorMessage("uname")}
            <TextField
                label="Password"
                variant="filled"
                margin="normal"
                fullWidth
                type="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            {renderErrorMessage("pass")}

            <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
          Sign in
        </Button>

        </Box>

        <Grid container>
              <Grid item xs>
                <Link href="#" variant="textBoldColor">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="textBoldColor">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      );

      return (
        <div className="App">
          <div className="login-form">

            {isSubmitted ? <Navigate to='home' /> : renderForm}
          </div>
        </div>
      );
} 