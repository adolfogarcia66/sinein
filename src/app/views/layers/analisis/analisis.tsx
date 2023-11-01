import { Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import ButtonsAdd from "../../share/ButtonsAdd";
import ButtonsDeleted from "../../share/ButtonsDeleted";
import ButtonsEdit from "../../share/ButtonsEdit";
import MUIXDataGrid from "../../share/MUIXDataGrid";
import TitleComponent from "../../share/TitleComponent";

export const Analisis = () => {
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
      field: "lugar",
      headerName: "Lugar",
      description: "Lugar",
      width: 150,
    },
    {
      field: "dia",
      headerName: "Día",
      description: "Día",
      width: 100,
    },
    {
      field: "Mes",
      headerName: "Mes",
      description: "Mes",
      width: 100,
    },
    {
      field: "folio",
      headerName: "Folio Interno",
      description: "Folio Interno",
      width: 100,
    },
    {
      field: "tipo",
      headerName: "Tipo",
      description: "Tipo",
      width: 100,
    },

    {
      field: "hechos",
      headerName: "Hechos",
      description: "Hechos",
      width: 100,
    },
    {
      field: "estatus",
      headerName: "Estatus",
      description: "Estatus",
      width: 100,
    },
    {
      field: "observacion",
      headerName: "Observación",
      description: "Observación",
      width: 100,
    },
    {
      field: "actualizacion",
      headerName: "Actualización",
      description: "Actualización",
      width: 100,
    },
  ];
  return (
    <div>
      <TitleComponent title={"Analisis"} show={open} />

      <Grid container spacing={1} padding={0}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ButtonsAdd handleOpen={handleOpen} agregar={true} />
          <MUIXDataGrid columns={columnsRel} rows={data} />
        </Grid>
      </Grid>
    </div>
  );
};
