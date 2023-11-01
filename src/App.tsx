import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importa Redirect
import { AppRouter } from "./app/router/AppRouter";
import { Plogin } from "./app/views/Plogin";

function App() {
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
