import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { AddArticulosComponent } from './pages/add-articulos/add-articulos.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:DashboardComponent},
  {path:'iniciar-sesion', component:LoginComponent},
  {path: 'articulos', component:ArticulosComponent},
  {path: 'addArticulos', component:AddArticulosComponent},
  {path: 'addArticulos/:valorBooleano', component: AddArticulosComponent}
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
