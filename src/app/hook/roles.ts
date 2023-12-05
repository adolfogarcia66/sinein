import { desencrypta, encrypta } from "../helpers/cifrado";
import { IRoles } from "../interfaces/Share";
import { getItem, setItem } from "../services/localStorage";

export const loadRol = () => {
  const roles: IRoles[] = JSON.parse(
    desencrypta(JSON.parse(String(getItem("l3"))))
  );
  console.log(roles);
  // Verificar si existe el rol "ADMINISTRADOR"
  const administrador = roles.find(
    (rol: IRoles) => rol.ControlInterno === "ADMIN"
  );
  if (administrador) {
    setItem(encrypta("ADMIN"), "l4");
  }

  // Verificar si existe el rol "OPERATIVO"
  const operativo = roles.find((rol: IRoles) => rol.ControlInterno === "OPER");
  if (operativo) {
    setItem(encrypta("OPER"), "l4");
  }

  // Verificar si existe el rol "CONSULTA"
  const consulta = roles.find(
    (rol: IRoles) => rol.ControlInterno === "CONSULTA"
  );
  if (consulta) {
    setItem(encrypta("CONSULTA"), "l4");
  }
};
