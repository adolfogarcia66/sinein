import { Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import ButtonsAdd from "../../share/ButtonsAdd";
import ButtonsDeleted from "../../share/ButtonsDeleted";
import ButtonsEdit from "../../share/ButtonsEdit";
import MUIXDataGrid from "../../share/MUIXDataGrid";
import TitleComponent from "../../share/TitleComponent";

export const Investigacion = () => {
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
      field: "hechos",
      headerName: "Hechos",
      description: "Hechos",
      width: 100,
    },
    {
      field: "folio",
      headerName: "Folio",
      description: "Folio",
      width: 100,
    },
    {
      field: "victima",
      headerName: "Victima",
      description: "Victima",
      width: 100,
    },
    {
      field: "resultado",
      headerName: "Resultado",
      description: "Resultado",
      width: 100,
    },
    {
      field: "np",
      headerName: "Número de empleado ",
      description: "Número de empleado ",
      width: 100,
    },
    {
      field: "curpp",
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
      field: "razon",
      headerName: "Razon social/empresa",
      description: "Razon social/empresa",
      width: 100,
    },
    {
      field: "victimario",
      headerName: "Victimario",
      description: "Victimario",
      width: 100,
    },
    {
      field: "empleadov",
      headerName: "Número de empleado ",
      description: "Número de empleado ",
      width: 100,
    },
    {
      field: "curpv",
      headerName: "CURP",
      description: "CURP",
      width: 100,
    },
    {
      field: "imssv",
      headerName: "IMSS",
      description: "IMSS",
      width: 100,
    },
    {
      field: "razonv",
      headerName: "Razon social/empresa",
      description: "Razon social/empresa",
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
      field: "veritas",
      headerName: "Veritas",
      description: "Veritas",
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
  ];
  return (
    <div>
      <TitleComponent title={"Investigación"} show={open} />

      <Grid container spacing={1} padding={0}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ButtonsAdd handleOpen={handleOpen} agregar={true} />
          <MUIXDataGrid columns={columnsRel} rows={data} />
        </Grid>
      </Grid>
    </div>
  );
};
