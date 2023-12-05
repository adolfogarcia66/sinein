import { desencrypta, encrypta } from "../helpers/cifrado";
import { IRoles } from "../interfaces/Share";
import { getItem, setItem } from "../services/localStorage";

export const loadRol = () => {
  const roles: IRoles[] = JSON.parse(
    desencrypta(JSON.parse(String(getItem("l3"))))
  );

  // Verificar si existe el rol "ADMINISTRADOR"
  const administrador = roles.find(
    (rol: IRoles) => rol.ControlInterno === "ADMINISTRADOR"
  );
  if (administrador) {
    setItem(encrypta("ADMINISTRADOR"), "l4");
  }

  // Verificar si existe el rol "OPERATIVO"
  const operativo = roles.find(
    (rol: IRoles) => rol.ControlInterno === "OPERATIVO"
  );
  if (operativo) {
    setItem(encrypta("OPERATIVO"), "l4");
  }

  // Verificar si existe el rol "CONSULTA"
  const consulta = roles.find(
    (rol: IRoles) => rol.ControlInterno === "CONSULTA"
  );
  if (consulta) {
    setItem(encrypta("CONSULTA"), "l4");
  }
};
