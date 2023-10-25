import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddService } from 'src/app/services/addArticulos/add.service';

@Component({
  selector: 'app-add-ordenes-com',
  templateUrl: './add-ordenes-com.component.html',
  styleUrls: ['./add-ordenes-com.component.css']
})
export class AddOrdenesComComponent implements OnInit {

  public formularioArticulo: FormGroup;

  constructor(private fb: FormBuilder, private addService: AddService) {}

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.formularioArticulo = this.fb.group({
      Id_Orden: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Tipo: ['', Validators.required],
      fecha_Armado: ['', Validators.required],
      fecha_finalizado: ['', Validators.required],
    });
  }

  CrearOrden() {
    if (this.formularioArticulo.valid) {
      const nuevaOrden = this.formularioArticulo.value;
      this.addService.crearOrden(nuevaOrden).subscribe((resultado) => {
      });
    }
  }
}