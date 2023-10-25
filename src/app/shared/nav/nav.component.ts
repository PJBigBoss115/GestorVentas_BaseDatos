import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit , OnDestroy {
  userLoginOn:boolean=false;

  constructor(private route: ActivatedRoute, private loginService:LoginService, private router: Router) {}
  
  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn) => {
          this.userLoginOn=userLoginOn;
        }
      }
    )

    this.route.paramMap.subscribe(params => {
      const valorBooleano = params.get('valorBooleano');
      if (valorBooleano === 'false') {
        // Asigna el valor a una variable en tu componente
        this.userLoginOn = false; // Aquí miVariable es una variable en tu componente
      }
    });
  }

  recargarPagina() {
    // Utiliza el objeto location para recargar la página
    this.router.navigate(['/inicio']);
    location.reload();
  }
}
