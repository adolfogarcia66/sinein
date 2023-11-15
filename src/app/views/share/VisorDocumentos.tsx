import DownloadingIcon from "@mui/icons-material/Downloading";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import {
  Box,
  DialogContent,
  Grid,
  IconButton,
  ToggleButton,
  Typography,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Toast } from "../../helpers/Toast";
import { Servicios } from "../../services/Servicios";
import { getItem } from "../../services/localStorage";
import ButtonsDeleted from "./ButtonsDeleted";
import { ButtonsDetail } from "./ButtonsDetail";
import MUIXDataGrid from "./MUIXDataGrid";
import ModalForm from "./ModalForm";
import Progress from "./Progress";
import { base64ToArrayBuffer } from "../../helpers/Files";

const VisorDocumentos = ({
  handleFunction,
  obj,
  tipo,
}: {
  handleFunction: Function;
  obj: any;
  tipo: string;
}) => {
  const [openSlider, setOpenSlider] = useState(false);
  const [verarchivo, setverarchivo] = useState(false);
  const [data, setData] = useState([]);
  const [URLruta, setURLRuta] = useState<string>("");
  const [tipoext, setTipoext] = useState<string>("");

  const [file64, setfile64] = useState<string>("");

  const consulta = () => {
    let data = {
      NUMOPERACION: 2,
      modulo: tipo,
      modulo_id: obj.Id,
    };

    Servicios.FilesAdmin(data).then((res) => {
      if (res.SUCCESS) {
        Toast.fire({
          icon: "success",
          title: "¡Consulta Exitosa!",
        });
        setData(res.RESPONSE);
        setOpenSlider(false);
      } else {
        setOpenSlider(false);
        Swal.fire("¡Error!", res.STRMESSAGE, "error");
      }
    });
  };

  // Luego, puedes llamar a este método con el CHID y FileName adecuados
  const handleDescargarFile = (v: any) => {
    descargarArchivo(v.row.id, v.row.FileName);
  };

  const descargarArchivo = (CHID: string, FileName: string) => {
    const apiUrl = "http://10.200.4.201:80/api/SINEIN/getFile";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ CHID }),
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
        link.download = FileName;
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

  const handleCloseModal = () => {
    setverarchivo(false);
  };

  const handleVer = (v: any) => {
    setOpenSlider(true);
    setTipoext(v.row.FileName.split(".").pop());

    let data = {
      CHID: v.row.id,
    };

    Servicios.GetDocumento(data).then((res) => {
      if (res.SUCCESS) {
        console.log(tipoext);
        setfile64(res.RESPONSE);
        var bufferArray = base64ToArrayBuffer(String(res.RESPONSE));
        var blobStore = new Blob([bufferArray], { type: tipoext });
        var data = window.URL.createObjectURL(blobStore);
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.href = data;
        setURLRuta(link.href);
        setOpenSlider(false);
        setverarchivo(true);
      } else {
        setOpenSlider(false);
        Swal.fire("¡Error!", res.STRMESSAGE, "error");
      }
    });
  };

  const ProcesaSPeis = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenSlider(true);
    let count = 0;
    let encontrados: any[] = [];
    let counfiles = event?.target?.files?.length;
    let peticiones: any[] = [];

    //Recorremos los registros de la busqueda
    for (let i = 0; i < Number(counfiles); i++) {
      let file = event?.target?.files?.[i] || "";
      let namefile = event?.target?.files?.[i].name || "";
      encontrados.push({ Archivo: file, NOMBRE: namefile });
    }

    encontrados.map((item: any) => {
      const formData = new FormData();
      formData.append("NUMOPERACION", "1");
      formData.append("modulo", tipo);
      formData.append("modulo_id", obj.Id);
      formData.append("CHUSER", getItem("id"));
      formData.append("FILE", item.Archivo, item.NOMBRE);

      console.log(item.Archivo);
      let p = axios.post(
        process.env.REACT_APP_APPLICATION_BASE_URL + "FilesAdmin",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Requested-With": "XMLHttpRequest",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      peticiones.push(p);
    });

    axios.all(peticiones).then((resposeArr) => {
      resposeArr.map((item) => {
        if (item.data.SUCCESS) {
          count++;
        } else {
          count--;
        }
      });

      if (count == 0 || count == -1) {
        Swal.fire("¡Error!", "No se Realizo la Operación", "error");
        setOpenSlider(false);
      } else {
        Swal.fire({
          icon: "success",
          title: "Información",
          text: "Archivos Subidos " + count,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            setOpenSlider(false);
            consulta();
          }
        });
      }
    });
  };

  const handleAccion = (v: any) => {
    Swal.fire({
      icon: "info",
      title: "¿Estás seguro de eliminar este registro?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(v);
        let data = {
          NUMOPERACION: 3,
          modulo: obj.modulo,
          modulo_id: obj.moduloid,
          ruta: obj.ruta,
        };

        Servicios.FilesAdmin(data).then((res) => {
          if (res.SUCCESS) {
            Toast.fire({
              icon: "success",
              title: "¡Registro Eliminado!",
            });
            consulta();
          } else {
            Swal.fire("¡Error!", res.STRMESSAGE, "error");
          }
        });
      } else if (result.isDenied) {
        Swal.fire("No se realizaron cambios", "", "info");
      }
    });
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Identificador",
      width: 150,
    },
    {
      field: "Ruta",
      width: 10,
    },
    {
      field: "acciones",
      disableExport: true,
      headerName: "Acciones",
      description: "Campo de Acciones",
      sortable: false,
      width: 200,
      renderCell: (v) => {
        return (
          <>
            <ButtonsDeleted
              handleAccion={handleAccion}
              row={v}
              show={true}
            ></ButtonsDeleted>
            <ButtonsDetail
              title={"Ver"}
              handleFunction={handleVer}
              show={true}
              icon={<RemoveRedEyeIcon />}
              row={v}
            ></ButtonsDetail>
            <ButtonsDetail
              title={"Descargar"}
              handleFunction={handleDescargarFile}
              show={true}
              icon={<DownloadingIcon />}
              row={v}
            ></ButtonsDetail>
          </>
        );
      },
    },
    { field: "FechaCreacion", headerName: "Fecha de Creación", width: 150 },
    {
      field: "FileName",
      description: "Nombre",
      headerName: "Nombre",
      width: 250,
    },
  ];

  useEffect(() => {
    consulta();
  }, []);

  return (
    <div>
      <ModalForm title={"Visor de Documentos"} handleClose={handleFunction}>
        <Progress open={openSlider}></Progress>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h4">{obj.Folio}</Typography>
        </Box>

        <ToggleButton value="check">
          <IconButton
            color="primary"
            aria-label="upload documento"
            component="label"
            size="small"
          >
            <input
              multiple
              hidden
              accept=".*"
              type="file"
              value=""
              onChange={(v) => ProcesaSPeis(v)}
            />
            <FileUploadIcon />
          </IconButton>
        </ToggleButton>
        <MUIXDataGrid columns={columns} rows={data} />
      </ModalForm>

      {verarchivo ? (
        <ModalForm title={"Visualización"} handleClose={handleCloseModal}>
          <DialogContent
            dividers={true}
            style={{ width: "100%", height: "600px" }}
          >
            <Grid
              container
              spacing={1}
              style={{ width: "100%", height: "100%" }}
            >
              {tipoext === "jpg" ? <img src={URLruta} alt="Archivo" /> : ""}
              {tipoext === "pdf" ? (
                // <embed
                //   src={`data:application/pdf;base64,${file64}`} // Tipo MIME para PDF
                //   type="application/pdf"
                //   style={{ width: "100%", height: "100%" }}
                // />

                <iframe
                  width="100%"
                  height="100%"
                  src={`data:application/pdf;base64,${file64}`}
                />
              ) : (
                ""
              )}
            </Grid>
          </DialogContent>
        </ModalForm>
      ) : (
        ""
      )}
    </div>
  );
};

export default VisorDocumentos;
