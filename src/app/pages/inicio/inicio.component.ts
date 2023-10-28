import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {
  informeData: any[] = [];
  
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataFromApi();
  }

  ngOnDestroy() {
    
  }

  getDataFromApi() {
    this.http.get<any[]>(`${this.apiUrl}/generarInformeDeptoSucursal`).subscribe(data => {
      this.informeData = data;
    });
  }
}
