import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reporte-proveedores',
  templateUrl: './reporte-proveedores.component.html',
  styleUrls: ['./reporte-proveedores.component.css']
})
export class ReporteProveedoresComponent implements OnInit, OnDestroy {
  informeData: any[] = [];
  
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataFromApi();
  }

  ngOnDestroy() {
    
  }

  getDataFromApi() {
    this.http.get<any[]>(`${this.apiUrl}/generarInformeProveedores`).subscribe(data => {
      this.informeData = data;
    });
  }
}
