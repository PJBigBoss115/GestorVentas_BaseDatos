import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService } from 'src/app/services/addArticulos/add.service';
import { DataSharingService } from 'src/app/services/data/data-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addofertas',
  templateUrl: './addofertas.component.html',
  styleUrls: ['./addofertas.component.css']
})
export class AddofertasComponent implements OnInit {

  public formularioArticulo: FormGroup;
  private dataSubscription: Subscription;

  constructor(private fb: FormBuilder, private addService: AddService, private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.inicializarFormulario();

    this.dataSubscription = this.dataSharingService.obtenerData().subscribe(proveedor => {
      if (proveedor) {
        this.procesarDatos(proveedor);
      }
    });
  }

  inicializarFormulario() {
    this.formularioArticulo = this.fb.group({
      Id_oferta: ['', Validators.required],
      Id_Prov: ['', Validators.required],
      Id_Pedido: ['', Validators.required],
      Precio_U: ['', Validators.required],
      Fecha_Presentacion: ['', Validators.required],
    });
  }

  crearOferta() {
    if (this.formularioArticulo.valid) {
      const nuevoProveedor = this.formularioArticulo.value;
      this.addService.crearOferta(nuevoProveedor).subscribe((resultado) => {
      });
    }
  }

  procesarDatos(proveedor: any) {
    // Aquí puedes procesar los datos o asignarlos a variables para su uso posterior
    let idProveedor = proveedor.Id_Proveedor;

    // Llena el formulario con los datos
    this.formularioArticulo.patchValue({
      Id_Prov: idProveedor,
    });
  }
}