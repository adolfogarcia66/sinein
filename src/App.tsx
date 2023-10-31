import LoginIcon from "@mui/icons-material/Login";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import backgroundImg from "../src/app/assets/img/backgroundImg.jpg"; // Importa la imagen desde tu carpeta assets
import logo from "../src/app/assets/img/logop.png";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {" "}
      {/* Cambiar a sx= */}
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          // Cambiar a sx=
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor:
            theme.palette.mode === "light" // Cambiar a theme.palette.mode
              ? theme.palette.grey[50]
              : theme.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={1}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            paddingTop: "20px",
            textAlign: "center", // Centra el texto horizontalmente
          }}
        >
          <img src={logo} alt="Descripción de la imagen" />
        </Box>
        <Typography
          variant={isSmallScreen ? "subtitle1" : "h5"}
          sx={{
            textAlign: "center", // Centra el texto horizontalmente
            margin: "20px",
          }}
        >
          SISTEMA DE INVESTIGACIÓN E INTELIGENCIA
        </Typography>

        <LoginIcon color="error" />
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="error"
            sx={{
              marginTop: "20px", // Agregar margen superior
            }}
          >
            Ingresar
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
          {/* <Box mt={5}>
            <Copyright />
          </Box> */}
        </form>
      </Grid>
    </Grid>
  );
}

export default App;
