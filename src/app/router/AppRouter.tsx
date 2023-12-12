import { Navigate, Route, Routes } from "react-router-dom";
import { Bienvenido } from "../views/Bienvenido";
import Inicio from "../views/Inicio";
import { Analisis } from "../views/layers/analisis/analisis";
import { Confianza } from "../views/layers/confianza/confianza";
import { Inteligencia } from "../views/layers/inteligencia/inteligencia";
import { Veritas } from "../views/layers/veritas/veritas";
import { Investigacion } from "../views/layers/investigacion/investigacion";
import { Usuarios } from "../views/layers/usuarios/usuarios";
import { loadRol } from "../hook/roles";
import { getItem } from "../services/localStorage";
import ChangePassword from "../views/share/changePassword";
import { desencrypta } from "../helpers/cifrado";

export const AppRouter = () => {
  loadRol();
  let flag;
  let user;
  try {
    flag = getItem("l1");
    user = JSON.parse(desencrypta(JSON.parse(String(getItem("l2"))))) as any;
  } catch (error) {
    console.error("Error al procesar los datos:", error);
  }

  return (
    <>
      <Inicio>
        <Routes>
          <Route
            path="/sinein/inicio"
            element={flag ? <Bienvenido /> : <Navigate to="/sinein" replace />}
          ></Route>
          <Route
            path="/sinein/investigacion"
            element={
              flag ? <Investigacion /> : <Navigate to="/sinein" replace />
            }
          ></Route>
          <Route
            path="/sinein/inteligencia"
            element={
              flag ? <Inteligencia /> : <Navigate to="/sinein" replace />
            }
          ></Route>
          <Route
            path="/sinein/analisis"
            element={flag ? <Analisis /> : <Navigate to="/sinein" replace />}
          ></Route>
          <Route
            path="/sinein/confianza"
            element={flag ? <Confianza /> : <Navigate to="/sinein" replace />}
          ></Route>
          <Route
            path="/sinein/veritas"
            element={flag ? <Veritas /> : <Navigate to="/sinein" replace />}
          ></Route>
          <Route
            path="/sinein/usuarios"
            element={flag ? <Usuarios /> : <Navigate to="/sinein" replace />}
          ></Route>
          <Route
            path="/sinein/cp"
            element={
              flag ? (
                <ChangePassword usuario={user} />
              ) : (
                <Navigate to="/sinein" replace />
              )
            }
          ></Route>
        </Routes>
      </Inicio>
    </>
  );
};
