import { Route, Routes } from "react-router-dom";
import { Bienvenido } from "../views/Bienvenido";
import Inicio from "../views/Inicio";
import { Analisis } from "../views/layers/analisis/analisis";
import { Confianza } from "../views/layers/confianza/confianza";
import { Inteligencia } from "../views/layers/inteligencia/inteligencia";
import { Investigacion } from "../views/layers/investigacion/investigacion";
import { Veritas } from "../views/layers/veritas/veritas";

export const AppRouter = () => {
  return (
    <>
      <Inicio>
        <Routes>
          <Route path="/inicio" element={<Bienvenido />}></Route>
          <Route path="/investigacion" element={<Investigacion />}></Route>
          <Route path="/inteligencia" element={<Inteligencia />}></Route>
          <Route path="/analisis" element={<Analisis />}></Route>
          <Route path="/confianza" element={<Confianza />}></Route>
          <Route path="/veritas" element={<Veritas />}></Route>
        </Routes>
      </Inicio>
    </>
  );
};
