import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export const Bienvenido = () => {
  const cardStyle = {
    backgroundColor: "#007bff", // Cambia esto al color deseado
    color: "#fff", // Color del texto
    borderRadius: "10px", // Borde redondeado
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Sombra
    maxWidth: 400,
  };

  const textStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                textAlign={"center"}
                sx={textStyle}
              >
                Investigaciones
              </Typography>
              <Typography
                variant="h4"
                component="div"
                textAlign={"center"}
                sx={textStyle}
              >
                1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                textAlign={"center"}
                sx={textStyle}
              >
                Inteligencia
              </Typography>
              <Typography
                variant="h4"
                component="div"
                textAlign={"center"}
                sx={textStyle}
              >
                1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                textAlign={"center"}
                sx={textStyle}
              >
                Análisis
              </Typography>
              <Typography
                variant="h4"
                component="div"
                textAlign={"center"}
                sx={textStyle}
              >
                1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                textAlign={"center"}
                sx={textStyle}
              >
                Pruebas de Confianza
              </Typography>
              <Typography
                variant="h4"
                component="div"
                textAlign={"center"}
                sx={textStyle}
              >
                1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        paddingTop={"10px"}
      >
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                textAlign={"center"}
                sx={textStyle}
              >
                Veritas
              </Typography>
              <Typography
                variant="h4"
                component="div"
                textAlign={"center"}
                sx={textStyle}
              >
                1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}></Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}></Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}></Grid>
      </Grid>
    </Grid>
  );
};
