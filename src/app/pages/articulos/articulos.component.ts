import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data/data-sharing.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit, OnDestroy {
  data: any[] = [];
  apiUrl = 'http://localhost:3000';
  
  isDeleting: boolean = false;

  constructor(private http: HttpClient, private router: Router, private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.getDataFromApi();
  }

  ngOnDestroy() {
    
  }

  getDataFromApi() {
    this.http.get(`${this.apiUrl}/verRegistros/Articulo`).subscribe((response: any) => {
      this.data = response; // Asigna los datos de la API a la matriz 'data'
    });
  }

  deleteData(id: number) {
    this.http.delete(`${this.apiUrl}/eliminarRegistro/Articulo/${id}`).subscribe((response) => {
      this.getDataFromApi(); // Actualiza los datos después de eliminar un artículo
    });
  }

  startEdit(articulo: any) {
    this.dataSharingService.enviarData(articulo); // Utiliza el método enviarData en lugar de emit
    this.router.navigate(['/addArticulos']);
  }
  
  addProveedor(articulo: any) {
    this.dataSharingService.enviarData(articulo); // Utiliza el método enviarData en lugar de emit
    this.router.navigate(['/addProveedores', true]);
  }

  hacerpedido(articulo: any) {
    this.dataSharingService.enviarData(articulo); // Utiliza el método enviarData en lugar de emit
    this.router.navigate(['/addPedido']);
  }

  // Función para habilitar o deshabilitar la eliminación
  toggleDelete() {
    this.isDeleting = !this.isDeleting;
  }
}