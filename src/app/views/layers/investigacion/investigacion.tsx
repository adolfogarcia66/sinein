import { Grid } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import ButtonsAdd from "../../share/ButtonsAdd";
import ButtonsDeleted from "../../share/ButtonsDeleted";
import ButtonsEdit from "../../share/ButtonsEdit";
import MUIXDataGrid from "../../share/MUIXDataGrid";
import TitleComponent from "../../share/TitleComponent";
import InvestigacionModal from "./InvestigacionModal";
import { Servicios } from "../../../services/Servicios";
import { AlertS } from "../../../helpers/AlertS";
import Swal from "sweetalert2";
import { getItem } from "../../../services/localStorage";
import ButtonsShare from "../../share/ButtonsShare";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import AttachmentIcon from "@mui/icons-material/Attachment";
import VisorDocumentos from "../../share/VisorDocumentos";
import axios from "axios";
import { base64ToArrayBuffer } from "../../../helpers/Files";
export const Investigacion = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [vrows, setVrows] = useState({});
  const [tipo, setTipo] = useState(0);
  const [openModal, setopenModal] = useState<boolean>(false);
  const [openModalFile, setopenModalFile] = useState<boolean>(false);

  const handleSend = () => {
    setShow(true);
    let data = {
      NUMOPERACION: 4,
    };

    Servicios.Investigacion(data).then((res) => {
      if (res.SUCCESS) {
        setData(res.RESPONSE);
        setShow(false);
      } else {
        setShow(false);
        AlertS.fire({
          title: "¡Error!",
          text: "Sin Respuesta",
          icon: "error",
        });
      }
    });
  };

  const handleClose = () => {
    handleSend();
    setopenModal(false);
    setopenModalFile(false);
  };

  const dowloandfile = (v: any) => {
    try {
      setShow(true);
      let data = {
        CHID: v.data.id,
      };

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: process.env.REACT_APP_APPLICATION_BASE_URL + "informes",
        headers: {
          "Content-Type": "application/json",
          responseType: "blob",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          var bufferArray = base64ToArrayBuffer(String(response.data.RESPONSE));
          var blobStore = new Blob([bufferArray], {
            type: "application/*",
          });

          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blobStore);
          link.download = "INFORME DE INVESTIGACION.docx";
          link.click();
          setShow(false);
        })
        .catch((error) => {
          console.log(error);
          setShow(false);
        });
    } catch (err: any) {
      setShow(false);
    }
  };

  const handlefiles = (v: any) => {
    console.log(v);
    setVrows(v.data.row);
    setopenModalFile(true);
  };

  const handleOpen = (v: any) => {
    setTipo(1);
    setopenModal(true);
  };
  const handleEdit = (v: any) => {
    setTipo(2);
    setVrows(v.data.row);
    setopenModal(true);
  };
  const handleDeleted = (v: any) => {
    Swal.fire({
      icon: "question",
      title: "Eliminación",
      text: "El Movimiento Seleccionado se Eliminará",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let data = {
          NUMOPERACION: 3,
          CHID: v.data.row.Id,
          CHUSER: getItem("id"),
        };

        Servicios.Investigacion(data).then((res) => {
          if (res.SUCCESS) {
            AlertS.fire({
              title: res.STRMESSAGE,
              icon: "success",
            }).then(async (result) => {
              if (result.isConfirmed) {
                handleSend();
              }
            });
          } else {
            AlertS.fire({
              title: "¡Error!",
              text: res.STRMESSAGE,
              icon: "error",
            });
          }
        });
      }
    });
  };
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
      width: 170,
      renderCell: (v: any) => {
        return (
          <>
            <ButtonsShare
              title={"Descargar Informe"}
              handleFunction={dowloandfile}
              show={true}
              icon={<FileOpenIcon />}
              row={v}
            />
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
            <ButtonsShare
              title={"Visualizar Archivos"}
              handleFunction={handlefiles}
              show={true}
              icon={<AttachmentIcon />}
              row={v}
            />
          </>
        );
      },
    },

    {
      field: "cuDescripcion",
      headerName: "Unidad Operativa",
      description: "Unidad Operativa",
      width: 150,
    },
    {
      field: "Dia",
      headerName: "Día",
      description: "Día",
      width: 70,
    },
    {
      field: "cmDescripcion",
      headerName: "Mes",
      description: "Mes",
      width: 100,
    },

    {
      field: "Anio",
      headerName: "Año",
      description: "Año",
      width: 70,
    },

    {
      field: "Hechos",
      headerName: "Hechos",
      description: "Hechos",
      width: 100,
    },
    {
      field: "Folio",
      headerName: "Folio",
      description: "Folio",
      width: 150,
    },
    {
      field: "VictimaNombre",
      headerName: "Victima",
      description: "Victima",
      width: 200,
    },
    {
      field: "VictimaNumeroEmpleado",
      headerName: "Número de empleado ",
      description: "Número de empleado ",
      width: 200,
    },
    {
      field: "VictimaCURP",
      headerName: "CURP",
      description: "CURP",
      width: 200,
    },
    {
      field: "VictimaIMSS",
      headerName: "IMSS",
      description: "IMSS",
      width: 200,
    },
    {
      field: "VictimaRazonSocial",
      headerName: "Razon social/empresa",
      description: "Razon social/empresa",
      width: 200,
    },
    {
      field: "VictimarioNombre",
      headerName: "Victimario",
      description: "Victimario",
      width: 200,
    },
    {
      field: "VictimarioNumeroEmpleado",
      headerName: "Número de empleado ",
      description: "Número de empleado ",
      width: 200,
    },
    {
      field: "VictimarioCURP",
      headerName: "CURP",
      description: "CURP",
      width: 200,
    },
    {
      field: "VictimarioIMSS",
      headerName: "IMSS",
      description: "IMSS",
      width: 200,
    },
    {
      field: "VictimarioRazonSocial",
      headerName: "Razon social/empresa",
      description: "Razon social/empresa",
      width: 200,
    },
    {
      field: "Entrevista",
      headerName: "Entrevista",
      description: "Entrevista",
      width: 100,
    },
    {
      field: "PC",
      headerName: "PC",
      description: "PC",
      width: 100,
    },
    {
      field: "Veritas",
      headerName: "Veritas",
      description: "Veritas",
      width: 100,
    },
    {
      field: "ceDescripcion",
      headerName: "Estatus",
      description: "Estatus",
      width: 100,
    },
    {
      field: "Observacion",
      headerName: "Observación",
      description: "Observación",
      width: 400,
    },
  ];
  useEffect(() => {
    handleSend();
  }, []);
  return (
    <div>
      <TitleComponent title={"Investigación"} show={show} />

      <Grid container spacing={1} padding={0}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ButtonsAdd handleOpen={handleOpen} agregar={true} />
          <MUIXDataGrid columns={columnsRel} rows={data} />
        </Grid>
      </Grid>
      {openModal ? (
        <InvestigacionModal handleClose={handleClose} tipo={tipo} dt={vrows} />
      ) : (
        ""
      )}
      {openModalFile ? (
        <VisorDocumentos
          handleFunction={handleClose}
          obj={vrows}
          tipo={"investigacion"}
        />
      ) : (
        ""
      )}
    </div>
  );
};
