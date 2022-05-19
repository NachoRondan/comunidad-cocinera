import * as React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  TextField,
  Box,
  Button,
  Avatar,
  Link,
  Typography,
  Grid,
  Alert,
  Paper,
  Stack,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import RestaurantIcon from "@mui/icons-material/Restaurant";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href=""></Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function PassRecovery({ setUserId }) {
  const [errorMessages, setErrorMessages] = useState({});
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    setIsSubmitted(true);
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <Stack sx={{ sm: 4, md: 7 }} spacing={2}>
        <Alert severity="error">{errorMessages.message}</Alert>
      </Stack>
    );

  // JSX code for login form
  const renderForm = (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://source.unsplash.com/collection/4651506)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
        }}
      ></Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box flex={4}>
            <Button
              component={Link}
              to={"/"}
              startIcon={<RestaurantIcon />}
              color="text"
            >
              <Typography variant="h5" component="h1" sx={{ display: "block" }}>
                Comunidad Cocinera
              </Typography>
            </Button>
          </Box>
          <Avatar sx={{ m: 1, bgcolor: "secondary" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="div" variant="h6">
            Recuperar Contraseña
          </Typography>

          <Typography component="div" variant="h7">
            Ingrese el correo electrónico de su cuenta.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1, alignItems: "center" }}
          >
            <TextField
              label="Email"
              type="email"
              variant="filled"
              margin="normal"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {renderErrorMessage("pass")}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar Email
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Grid>
    </Grid>
  );

  return (
    <div className="App">
      <div className="login-form">
        {isSubmitted ? <Navigate to="/" /> : renderForm}
      </div>
    </div>
  );
}
