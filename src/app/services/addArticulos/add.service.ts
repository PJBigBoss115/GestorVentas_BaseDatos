import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Método para crear un nuevo artículo
  crearArticulo(articulo: any) {
    return this.http.post(`${this.apiUrl}/crearRegistro/Articulo`, articulo);
  }

  editarArticulo(tabla: string, id: number, nuevosDatos: any) {
    const url = `${this.apiUrl}/modificarRegistro/${tabla}/${id}`;
    return this.http.put(url, nuevosDatos);
  }
}