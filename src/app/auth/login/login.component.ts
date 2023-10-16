import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: string = '';
  loginForm = this.formBuilder.group({
    email: ['example@gmail.com', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if (this.loginForm.valid) {
      const username = this.email.value;
      const password = this.password.value;
  
      if (username !== null && password !== null) { // Comprobación para evitar null
        this.loginService.login(username, password).subscribe((isValid) => {
          if (isValid) {
            console.log('Inicio de sesión exitoso');
            this.router.navigateByUrl('/inicio');
            this.loginForm.reset();
          } else {
            console.error('Credenciales incorrectas');
            this.loginError = 'Credenciales incorrectas';
          }
        });
      } else {
        console.error('Nombre de usuario o contraseña es null');
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }  
}
