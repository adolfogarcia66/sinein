//IDENTIFICAR QUE EL USUARIO YA ESTA LOGEADO
export const setItem = (data: any, item: string) => {
  localStorage.setItem(item, JSON.stringify(data));
};
export const getItem = (item: string): any => {
  return JSON.parse(localStorage.getItem(item) || "");
};
