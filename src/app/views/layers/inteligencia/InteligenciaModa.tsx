import { useState } from "react";
import ModalForm from "../../share/ModalForm";
import Progress from "../../share/Progress";
import CloseIcon from "@mui/icons-material/Close";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Box, Button, Grid, TextField } from "@mui/material";
export const InteligenciaModa = ({
  handleClose,
  tipo,
  dt,
}: {
  handleClose: Function;
  tipo: number;
  dt: any;
}) => {
  const [show, setShow] = useState(false);
  const handleSend = () => {};
  return (
    <>
      <ModalForm
        title={tipo === 1 ? "Agregar Registro" : "Editar Registro"}
        handleClose={handleClose}
      >
        <Progress open={show}></Progress>
        <Box boxShadow={3}>
          <Grid
            container
            item
            spacing={1}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: "2%" }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Unidad Operativa" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Día" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Mes" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Año" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            item
            spacing={1}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: "2%" }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Folio Interno" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Tipo" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Puesto/Situación" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Nombre del examinado" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            item
            spacing={1}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: "2%" }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="CURP" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="IMSS" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Solicitante" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="FORM" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            item
            spacing={1}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: "2%" }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Veritas" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Entrevista" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="PC" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="ESTATUS" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            item
            spacing={1}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: "2%" }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField label="Observación" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={1}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ padding: "2%" }}
          >
            <Grid item xs={12} sm={12} md={12} lg={2}></Grid>
            <Grid item xs={12} sm={12} md={12} lg={2}></Grid>
            <Grid item xs={12} sm={12} md={12} lg={2}>
              <Button
                fullWidth
                startIcon={<AddTaskIcon />}
                variant="contained"
                sx={{
                  backgroundColor: "green",
                }}
                className={tipo === 1 ? "guardar" : "actualizar"}
                onClick={() => handleSend()}
              >
                {tipo === 1 ? "Agregar" : "Actualizar"}
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={2}>
              <Button
                fullWidth
                startIcon={<CloseIcon />}
                variant="contained"
                color="error"
                className={"actualizar"}
                onClick={() => handleClose()}
              >
                {"Salir"}
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={2}></Grid>
            <Grid item xs={12} sm={12} md={12} lg={2}></Grid>
          </Grid>
        </Box>
      </ModalForm>
    </>
  );
};
