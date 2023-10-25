import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService } from 'src/app/services/addArticulos/add.service';
import { Articulo } from 'src/app/services/data/articulo';
import { DataSharingService } from 'src/app/services/data/data-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addpedidos',
  templateUrl: './addpedidos.component.html',
  styleUrls: ['./addpedidos.component.css']
})
export class AddpedidosComponent implements OnInit {

  public formularioArticulo: FormGroup;
  
  articulo: Articulo | null;
  private dataSubscription: Subscription;

  constructor(private fb: FormBuilder, private addService: AddService, private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.inicializarFormulario();

    this.dataSubscription = this.dataSharingService.obtenerData().subscribe(articulo => {
      if (articulo) {
        this.procesarDatos(articulo);
      }
    });
  }

  ngOnDestroy() {
    this.redirigirSinDatos();
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  inicializarFormulario() {
    this.formularioArticulo = this.fb.group({
      Id_Pedido: ['', Validators.required],
      Id_Articulo: ['', Validators.required],
      Cantidad: ['', Validators.required],
      Fecha_Realizacion: ['', Validators.required],
      Fecha_Estimada: ['', Validators.required],
    });
  }

  redirigirSinDatos() {
    this.articulo = null;
  }

  HacerPedido() {
    if (this.formularioArticulo.valid) {
      const nuevoArticulo = this.formularioArticulo.value;
      this.addService.crearPedido(nuevoArticulo).subscribe((resultado) => {
      });
    }
  }

  procesarDatos(articulo: Articulo) {
    // Aquí puedes procesar los datos o asignarlos a variables para su uso posterior
    let idArticulo = articulo.Id_Articulo;

    // Llena el formulario con los datos
    this.formularioArticulo.patchValue({
      Id_Articulo: idArticulo,
    });
  }
}