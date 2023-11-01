import { Route, Routes } from "react-router-dom";
import Bienvenido from "../views/Bienvenido";
import Inicio from "../views/Inicio";

export const AppRouter = () => {
  return (
    <>
      <Inicio>
        <Routes>
          <Route path="/inicio" element={<Bienvenido />} />
        </Routes>
      </Inicio>
    </>
  );
};
