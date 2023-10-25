import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit, OnDestroy {
  informeData: any[] = [];
  
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataFromApi();
  }

  ngOnDestroy() {
    
  }

  getDataFromApi() {
    this.http.get<any[]>(`${this.apiUrl}/verRegistros/Pedidos`).subscribe(data => {
      this.informeData = data;
    });
  }
}