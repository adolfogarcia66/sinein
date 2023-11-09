import { post, postDoc } from "./apiServiceExt";

export class Servicios {
  public static async login(data: any) {
    return await post("login", data);
  }

  public static async obtenerDoc(data: any) {
    return await postDoc("obtenerDoc", data);
  }

  public static async selectores(data: any) {
    return await post("selectores", data);
  }

  public static async Veritas(data: any) {
    return await post("Veritas", data);
  }
}
