import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddproveedoresService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  crearProveedor(Proveedor: any) {
    return this.http.post(`${this.apiUrl}/crearRegistro/Proveedores`, Proveedor);
  }

  crearProv_Art(Prov_Art: any) {
    return this.http.post(`${this.apiUrl}/crearRegistro/Prov_Art`, Prov_Art);
  }

  buscarRegistro(tabla: string, condicion: any) {
    const url = `${this.apiUrl}/buscarRegistro/${tabla}`;
    return this.http.post(url, condicion);
  }

  editarProveedor(id: number, nuevosDatos: any) {
    const url = `${this.apiUrl}/modificarProveedor/Proveedores/${id}`;
    return this.http.put(url, nuevosDatos);
  }
}
