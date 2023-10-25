import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { OrComprasComponent } from './pages/or-compras/or-compras.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AddArticulosComponent } from './pages/add-articulos/add-articulos.component';
import { ReporteProveedoresComponent } from './pages/ReporteProveedores/reporte-proveedores/reporte-proveedores.component';
import { ProveedoresComponent } from './pages/Proveedores/proveedores/proveedores.component';
import { AddproveedoresComponent } from './pages/addproveedores/addproveedores/addproveedores.component';
import { OfertasComponent } from './pages/Ofertas/ofertas/ofertas.component';
import { AddofertasComponent } from './pages/addofertas/addofertas/addofertas.component';
import { AddpedidosComponent } from './pages/addPedidos/addpedidos/addpedidos.component';
import { AddOrdenesComComponent } from './pages/addOrdenesCom/add-ordenes-com/add-ordenes-com.component';
import { ReporteGeneralComponent } from './pages/reporteGeneral/reporte-general/reporte-general.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    PedidosComponent,
    ArticulosComponent,
    OrComprasComponent,
    InicioComponent,
    AddArticulosComponent,
    ReporteProveedoresComponent,
    ProveedoresComponent,
    AddproveedoresComponent,
    OfertasComponent,
    AddofertasComponent,
    AddpedidosComponent,
    AddOrdenesComComponent,
    ReporteGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
