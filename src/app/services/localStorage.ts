//IDENTIFICAR QUE EL USUARIO YA ESTA LOGEADO
export const setItem = (data: any, item: string) => {
  localStorage.setItem(item, JSON.stringify(data));
};
export const getItem = (item: string): string => {
  return String(localStorage.getItem(item));
};
