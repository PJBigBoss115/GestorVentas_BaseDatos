import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data/data-sharing.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit, OnDestroy {
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
    this.http.get(`${this.apiUrl}/verRegistros/Proveedores`).subscribe((response: any) => {
      this.data = response; // Asigna los datos de la API a la matriz 'data'
    });
  }

  deleteData(id: number) {
    this.http.delete(`${this.apiUrl}/eliminarProveedor/Proveedores/${id}`).subscribe((response) => {
      this.getDataFromApi(); // Actualiza los datos después de eliminar un artículo
    });
  }

  startEdit(proveedor: any) {
    this.dataSharingService.enviarData(proveedor); // Utiliza el método enviarData en lugar de emit
    this.router.navigate(['/addProveedores']);
  }
  
  agregarOferta(proveedor: any) {
    this.dataSharingService.enviarData(proveedor); // Utiliza el método enviarData en lugar de emit
    this.router.navigate(['/addOfertas']);
  }

  // Función para habilitar o deshabilitar la eliminación
  toggleDelete() {
    this.isDeleting = !this.isDeleting;
  }
}
