import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit, OnDestroy {
  informeData: any[] = [];
  
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataFromApi();
  }

  ngOnDestroy() {
    
  }

  getDataFromApi() {
    this.http.get<any[]>(`${this.apiUrl}/verRegistros/OFERTA`).subscribe(data => {
      this.informeData = data;
    });
  }
}