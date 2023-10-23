import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Articulo } from './articulo';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private enviaDataSubject = new BehaviorSubject<Articulo | null>(null);
  
  constructor() { }

  enviarData(articulo: Articulo) {
    this.enviaDataSubject.next(articulo);
  }

  obtenerData(): Observable<Articulo | null> {
    return this.enviaDataSubject.asObservable();
  }
}