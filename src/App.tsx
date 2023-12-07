import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "./app/router/AppRouter";
import { Plogin } from "./app/views/Plogin";

function App() {
  useEffect(() => {
    // Redirección de HTTP a HTTPS
    if (
      window.location.protocol !== "https:" &&
      window.location.hostname !== "localhost"
    ) {
      window.location.href =
        "https://" + window.location.hostname + window.location.pathname;
    }

    const handleBeforeUnload = (event: any) => {
      const message = "¿Estás seguro de que deseas salir?";
      event.returnValue = message; // Estándar para la mayoría de los navegadores
      return message; // Necesario para algunos navegadores más antiguos
    };

    if (window.location.hostname !== "localhost") {
      const bloquearClickDerecho = (e: MouseEvent) => {
        e.preventDefault();
      };
      // Agregar el escucha de evento para el click derecho en el montaje del componente
      window.addEventListener("contextmenu", bloquearClickDerecho);
      window.addEventListener("beforeunload", handleBeforeUnload);
      // Remover el escucha de evento cuando el componente se desmonta
      return () => {
        window.removeEventListener("contextmenu", bloquearClickDerecho);
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Plogin />} />
          <Route path="/*" element={<AppRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
