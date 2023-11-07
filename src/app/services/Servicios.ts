import { post, postDoc } from "./apiServiceExt";

export class Servicios {
  public static async login(data: any) {
    return await post("login", data);
  }

  public static async obtenerDoc(data: any) {
    return await postDoc("obtenerDoc", data);
  }
}
