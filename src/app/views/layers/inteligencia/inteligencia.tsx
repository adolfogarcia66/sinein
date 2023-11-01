import { Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import ButtonsAdd from "../../share/ButtonsAdd";
import ButtonsDeleted from "../../share/ButtonsDeleted";
import ButtonsEdit from "../../share/ButtonsEdit";
import MUIXDataGrid from "../../share/MUIXDataGrid";
import TitleComponent from "../../share/TitleComponent";

export const Inteligencia = () => {
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
      field: "uo",
      headerName: "Unidad Operativa",
      description: "Unidad Operativa",
      width: 100,
    },
    {
      field: "dia",
      headerName: "Día",
      description: "Día",
      width: 100,
    },
    {
      field: "mes",
      headerName: "Mes",
      description: "Mes",
      width: 100,
    },

    {
      field: "anio",
      headerName: "Año",
      description: "Año",
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
      field: "nombreex",
      headerName: "Nombre del examinado",
      description: "Nombre del examinado",
      width: 100,
    },

    {
      field: "curp",
      headerName: "CURP",
      description: "CURP",
      width: 100,
    },

    {
      field: "imss",
      headerName: "IMSS",
      description: "IMSS",
      width: 100,
    },

    {
      field: "solicitante",
      headerName: "Solicitante",
      description: "Solicitante",
      width: 100,
    },
    {
      field: "form",
      headerName: "FORM",
      description: "FORM",
      width: 100,
    },
    {
      field: "veritas",
      headerName: "Veritas",
      description: "Veritas",
      width: 100,
    },
    {
      field: "entrevista",
      headerName: "Entrevista",
      description: "Entrevista",
      width: 100,
    },
    {
      field: "pc",
      headerName: "PC",
      description: "PC",
      width: 100,
    },
    {
      field: "estatus",
      headerName: "Estatus",
      description: "Estatus",
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
      <TitleComponent title={"Inteligencia"} show={open} />

      <Grid container spacing={1} padding={0}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ButtonsAdd handleOpen={handleOpen} agregar={true} />
          <MUIXDataGrid columns={columnsRel} rows={data} />
        </Grid>
      </Grid>
    </div>
  );
};
