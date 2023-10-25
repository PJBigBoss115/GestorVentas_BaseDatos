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

  crearPedido(articulo: any) {
    return this.http.post(`${this.apiUrl}/crearRegistro/Pedidos`, articulo);
  }

  crearOrden(orden: any) {
    return this.http.post(`${this.apiUrl}/crearRegistro/Orden_Compra`, orden);
  }

  crearOferta(orden: any) {
    return this.http.post(`${this.apiUrl}/crearRegistro/Oferta`, orden);
  }

  editarArticulo(tabla: string, id: number, nuevosDatos: any) {
    const url = `${this.apiUrl}/modificarRegistro/${tabla}/${id}`;
    return this.http.put(url, nuevosDatos);
  }
}