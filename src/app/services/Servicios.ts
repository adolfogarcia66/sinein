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

  public static async Investigacion(data: any) {
    return await post("Investigacion", data);
  }
  public static async Inteligencia(data: any) {
    return await post("Inteligencia", data);
  }
  public static async Analisis(data: any) {
    return await post("Analisis", data);
  }
  public static async Prueba(data: any) {
    return await post("Prueba", data);
  }
  public static async Veritas(data: any) {
    return await post("Veritas", data);
  }
}
