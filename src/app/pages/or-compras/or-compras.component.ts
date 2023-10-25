import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-or-compras',
  templateUrl: './or-compras.component.html',
  styleUrls: ['./or-compras.component.css']
})
export class OrComprasComponent implements OnInit, OnDestroy {
  informeData: any[] = [];
  
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataFromApi();
  }

  ngOnDestroy() {
    
  }

  getDataFromApi() {
    this.http.get<any[]>(`${this.apiUrl}/verRegistros/Orden_Compra`).subscribe(data => {
      this.informeData = data;
    });
  }
}