import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApiUsuario = 'http://localhost:3000/usuarios';

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    // Realiza una solicitud GET al archivo JSON local
    return this.http.get<User[]>(this.urlApiUsuario).pipe(
      catchError(this.handleError),
      map((usuarios: User[]) => {
        // Compara las credenciales proporcionadas con los datos en el archivo JSON
        const usuarioEncontrado = usuarios.find(usuario => usuario.correo === username && usuario.clave === password);
        if (usuarioEncontrado) {
          // Si se encuentra el usuario, actualiza el estado de inicio de sesión y los datos del usuario
          this.currentUserData.next(usuarioEncontrado);
          this.currentUserLoginOn.next(true);
          return true; // Devuelve true si el inicio de sesión es exitoso
        } else {
          return false; // Devuelve false si las credenciales son incorrectas
        }
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error', error.error);
    } else {
      console.error('Backend retornó el código de estado', error.status, error.error);
    }
    return throwError(() => new Error('Algo falló. Por favor, inténtelo de nuevo.'));
  }

  get userData(): Observable<User | null> {
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }
}