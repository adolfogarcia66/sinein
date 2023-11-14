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
    console.log(v.data.id);
    const apiUrl = "http://10.200.4.201:80/api/SINEIN/informes";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ CHID: v.data.id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al obtener el archivo: ${response.status}`);
        }
        // Configurar los encabezados de la respuesta
        const contentType = response.headers.get("Content-Type");
        // Obtener el contenido como array buffer
        return response.arrayBuffer();
      })
      .then((arrayBuffer) => {
        // Crear un objeto Blob a partir del array buffer
        const blob = new Blob([arrayBuffer]);

        // Crear un objeto URL para el blob
        const blobUrl = URL.createObjectURL(blob);

        // Crear un enlace para descargar el archivo
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "FORMATO DE INVESTIGACION.docx";
        document.body.appendChild(link);

        // Simular un clic en el enlace para iniciar la descarga
        link.click();

        // Limpiar el objeto URL después de la descarga
        URL.revokeObjectURL(blobUrl);

        // Eliminar el enlace del DOM
        link.remove();
      })
      .catch((error) => {
        console.error("Error al obtener el archivo:", error.message);
        Swal.fire("¡Error!", error.message, "error");
      });
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
              handleFunction={dowloandfile}
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
