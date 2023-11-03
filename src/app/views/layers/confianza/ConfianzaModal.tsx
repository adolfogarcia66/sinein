import { useState } from "react";
import ModalForm from "../../share/ModalForm";
import Progress from "../../share/Progress";
import CloseIcon from "@mui/icons-material/Close";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Box, Button, Grid, TextField } from "@mui/material";
import CustomizedDate from "../../share/CustomizedDate";
import { Dayjs } from "dayjs";
export const ConfianzaModal = ({
  handleClose,
  tipo,
  dt,
}: {
  handleClose: Function;
  tipo: number;
  dt: any;
}) => {
  const [show, setShow] = useState(false);
  const [fa, setfa] = useState<Dayjs | null>();
  const [fna, setfna] = useState<Dayjs | null>();

  const handleFilterChangefa = (v: any) => {
    setfa(v);
  };

  const handleFilterChangefna = (v: any) => {
    setfna(v);
  };
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
              <TextField label="Folio Interno" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Nombre" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Número de Empleado" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="CURP" fullWidth />
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
              <TextField label="Área" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Puesto" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Tipo de Prueba" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField label="Resultado" fullWidth />
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
              <CustomizedDate
                value={fa}
                label={"Fecha Aplicación"}
                onchange={handleFilterChangefa}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CustomizedDate
                value={fna}
                label={"Fecha Nueva Aplicación"}
                onchange={handleFilterChangefna}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
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
