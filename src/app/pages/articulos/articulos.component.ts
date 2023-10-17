import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  data: any[] = [];

  isEditing: boolean = false;
  isDeleting: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    // Reemplaza la URL con la URL de tu API
    this.http.get('http://localhost:3000/usuarios').subscribe((response: any) => {
      this.data = response; // Asigna los datos de la API a la matriz 'data'
    });
  }

  // Función para habilitar o deshabilitar la edición
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  // Función para habilitar o deshabilitar la eliminación
  toggleDelete() {
    this.isDeleting = !this.isDeleting;
  }

  // Función para eliminar un dato
  deleteData(index: number) {
    this.data.splice(index, 1);
  }
}