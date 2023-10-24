import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { AddArticulosComponent } from './pages/add-articulos/add-articulos.component';
import { NavComponent } from './shared/nav/nav.component';
import { ReporteProveedoresComponent } from './pages/ReporteProveedores/reporte-proveedores/reporte-proveedores.component';
import { ProveedoresComponent } from './pages/Proveedores/proveedores/proveedores.component';
import { AddproveedoresComponent } from './pages/addproveedores/addproveedores/addproveedores.component';
import { OfertasComponent } from './pages/Ofertas/ofertas/ofertas.component';
import { AddofertasComponent } from './pages/addofertas/addofertas/addofertas.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:DashboardComponent},
  {path:'iniciar-sesion.', component:LoginComponent},
  {path: 'articulos', component:ArticulosComponent},
  {path: 'addArticulos', component:AddArticulosComponent},
  {path: 'addArticulos/:valorBooleano', component: AddArticulosComponent},
  {path: 'iniciar/:valorBooleano', component: NavComponent},
  {path: 'reportes/proveedores', component: ReporteProveedoresComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'addProveedores', component: AddproveedoresComponent},
  {path: 'addProveedores/:valorBooleano', component: AddproveedoresComponent},
  {path: 'ofertas', component: OfertasComponent},
  {path: 'addOfertas', component: AddofertasComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
