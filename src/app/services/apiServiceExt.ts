import axios from "axios";
import { getHeaderInfo } from "./tokenCreator";

/**
 * MANEJO AUTOMATICO DE PETICIONES
 *
 * ADOLFO ANGEL GARCIA 10/08/2022
 */

const handleResponseDoc = (response: any) => {
  let rs;
  rs = {
    RESPONSE: response.data.RESPONSE,
    SUCCESS: response.data.SUCCESS,
    NUMCODE: response.data.NUMCODE,
    STRMESSAGE: response.data.STRMESSAGE,
  };
  return rs;
};
const handleResponse = (response: any) => {
  let rs;
  rs = {
    RESPONSE: response.RESPONSE,
    SUCCESS: response.SUCCESS,
    NUMCODE: response.NUMCODE,
    STRMESSAGE: response.STRMESSAGE,
  };
  return rs;
};

export const post = async function (url: string, body: any) {
  let header = await getHeaderInfo();
  try {
    let resp = await axios.post(
      process.env.REACT_APP_APPLICATION_BASE_URL + url,
      body,
      header
    );
    return handleResponse(resp.data);
  } catch (err: any) {
    return handleResponse(err.response);
  }
};

export const postDoc = async function (url: string, body: any) {
  let header = await getHeaderInfo();
  try {
    let resp = await axios.post(
      process.env.REACT_APP_APPLICATION_BASE_URL + url,
      body,
      header
    );
    return handleResponseDoc(resp);
  } catch (err: any) {
    return handleResponseDoc(err.response);
  }
};

export const postFile = async function (url: string, body: any) {
  let header = await getHeaderInfo();
  let resp = await axios.post(
    process.env.REACT_APP_APPLICATION_BASE_URL + url,
    body,
    header
  );
  return resp;
};
