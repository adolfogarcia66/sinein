import LoginIcon from "@mui/icons-material/Login";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import backgroundImg from "../assets/img/backgroundImg.jpg"; // Importa la imagen desde tu carpeta assets
import logo from "../assets/img/logop.png";
import { useNavigate } from "react-router-dom";
import Progress from "./share/Progress";
import { useState } from "react";
import { Servicios } from "../services/Servicios";
import { AlertS } from "../helpers/AlertS";
import { setItem } from "../services/localStorage";

export const Plogin = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [slideropen, setslideropen] = useState(false);
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const login = () => {
    setslideropen(true);
    let data = {
      nombreUsuario: username,
      Password: pass,
    };

    Servicios.login(data).then((res) => {
      if (res.SUCCESS) {
        if (res.RESPONSE.respuesta) {
          setItem(res.RESPONSE.id, "id");
          navigate("/inicio");
        } else {
          AlertS.fire({
            title: "¡Error!",
            text: "Favor de Validar sus Credenciales",
            icon: "error",
          });
        }
        setslideropen(false);
      } else {
        setslideropen(false);
        AlertS.fire({
          title: "¡Error!",
          text: "Sin Respuesta",
          icon: "error",
        });
      }
    });
  };

  return (
    <div>
      <Progress open={slideropen}></Progress>
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
              label="Usuario"
              name="email"
              autoComplete="email"
              autoFocus
              value={username}
              onChange={(v) => setUsername(v.target.value)}
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
              value={pass}
              onChange={(v) => setPass(v.target.value)}
            />
            {/* <FormControlLabel
            control={<Checkbox value="remember" />}
            label="Remember me"
          /> */}
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{
                marginTop: "20px", // Agregar margen superior
              }}
              onClick={login}
              disabled={!(username.trim() !== "" && pass.trim() !== "")}
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
    </div>
  );
};
