import Box from "@mui/material/Box";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
export default function Navigator(props: DrawerProps, logoFijo: any) {
  const { ...other } = props;
  const navigate = useNavigate();

  const consulta = (data: string) => {
    navigate(data);
  };

  return (
    <Drawer variant="permanent" {...other} {...logoFijo}>
      {/* <Grid
        container
        position="sticky"
        alignContent="center"
        sx={{ bgcolor: "rgb(255, 255, 255)", width: "100%" }}
      >
       
        <Grid
          item
          sx={{ width: "auto", textAlign: "center", paddingLeft: "3%" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "550" }}>
          
            DISTRIBUCIÓN DE RECURSOS
          </Typography>
      
        </Grid>
      </Grid> */}

      <Box
        sx={{
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <div></div>
      </Box>
    </Drawer>
  );
}
