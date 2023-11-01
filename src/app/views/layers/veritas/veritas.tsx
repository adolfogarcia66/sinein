import { Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import ButtonsAdd from "../../share/ButtonsAdd";
import ButtonsDeleted from "../../share/ButtonsDeleted";
import ButtonsEdit from "../../share/ButtonsEdit";
import MUIXDataGrid from "../../share/MUIXDataGrid";
import TitleComponent from "../../share/TitleComponent";

export const Veritas = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const handleOpen = (v: any) => {};
  const handleEdit = (v: any) => {};
  const handleDeleted = (v: any) => {};
  const columnsRel: GridColDef[] = [
    {
      field: "id",
    },
    {
      field: "Operaciones",
      disableExport: true,
      headerName: "Operaciones",
      description: "Operaciones",
      sortable: false,
      width: 100,
      renderCell: (v: any) => {
        return (
          <>
            <ButtonsEdit
              handleAccion={handleEdit}
              row={v}
              show={true}
            ></ButtonsEdit>
            <ButtonsDeleted
              handleAccion={handleDeleted}
              row={v}
              show={true}
            ></ButtonsDeleted>
          </>
        );
      },
    },

    {
      field: "Num",
      headerName: "Núm",
      description: "Núm",
      width: 150,
    },
    {
      field: "folio",
      headerName: "Folio Interno",
      description: "Folio Interno",
      width: 100,
    },
    {
      field: "nombre",
      headerName: "Nombre",
      description: "Nombre",
      width: 100,
    },
    {
      field: "numeroempl",
      headerName: "Numero de empleado",
      description: "Numero de empleado",
      width: 100,
    },

    {
      field: "curp",
      headerName: "CURP",
      description: "CURP",
      width: 100,
    },

    {
      field: "area",
      headerName: "Area",
      description: "Area",
      width: 100,
    },
    {
      field: "puesto",
      headerName: "Puesto",
      description: "Puesto",
      width: 100,
    },
    {
      field: "tipoprueba",
      headerName: "Tipo de prueba ",
      description: "Tipo de prueba ",
      width: 100,
    },
    {
      field: "resultado",
      headerName: "Resultado",
      description: "Resultado",
      width: 100,
    },
    {
      field: "fechaaplicacion",
      headerName: "Fecha de aplicación ",
      description: "Fecha de aplicación ",
      width: 100,
    },
    {
      field: "fechanuevaaplicacion",
      headerName: "Fecha de nueva aplicación ",
      description: "Fecha de nueva aplicación ",
      width: 100,
    },
    {
      field: "observaciones",
      headerName: "Observaciones",
      description: "Observaciones",
      width: 100,
    },
  ];
  return (
    <div>
      <TitleComponent title={"Veritas"} show={open} />

      <Grid container spacing={1} padding={0}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ButtonsAdd handleOpen={handleOpen} agregar={true} />
          <MUIXDataGrid columns={columnsRel} rows={data} />
        </Grid>
      </Grid>
    </div>
  );
};
