import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService } from 'src/app/services/addArticulos/add.service';
import { Articulo } from 'src/app/services/data/articulo';
import { DataSharingService } from 'src/app/services/data/data-sharing.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-AddArticulos',
  templateUrl: './add-articulos.component.html',
  styleUrls: ['./add-articulos.component.css'],
})
export class AddArticulosComponent implements OnInit {

  public formularioArticulo: FormGroup;
  isEditing: boolean = false;
  
  articulo: Articulo | null;
  private dataSubscription: Subscription;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private addService: AddService, private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.inicializarFormulario();

    this.route.paramMap.subscribe(params => {
      const valorBooleano = params.get('valorBooleano');
      if (valorBooleano === 'true') {
        // Asigna el valor a una variable en tu componente
        this.isEditing = true; // Aquí miVariable es una variable en tu componente
      }
    });

    this.dataSubscription = this.dataSharingService.obtenerData().subscribe(articulo => {
      if (articulo && this.isEditing === false) {
        this.isEditing = !this.isEditing;
        this.procesarDatos(articulo);
      } else {
        this.isEditing = false;
        this.inicializarFormulario();
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
      Id_Articulo: ['', Validators.required],
      Nombre: ['', Validators.required],
      Descripcion: ['', Validators.required],
    });
  }

  redirigirSinDatos() {
    this.articulo = null;
  }

  crearArticulo() {
    if (this.formularioArticulo.valid) {
      const nuevoArticulo = this.formularioArticulo.value;
      this.addService.crearArticulo(nuevoArticulo).subscribe((resultado) => {
      });
    }
  }

  procesarDatos(articulo: Articulo) {
    // Aquí puedes procesar los datos o asignarlos a variables para su uso posterior
    let idArticulo = articulo.Id_Articulo;
    let nombre = articulo.Nombre;
    let descripcion = articulo.Descripcion;

    // Llena el formulario con los datos
    this.formularioArticulo.patchValue({
      Id_Articulo: idArticulo,
      Nombre: nombre,
      Descripcion: descripcion,
    });
  
    // Puedes realizar cualquier otra lógica relacionada con los datos aquí
  }

  editArticulo() {
    if (this.formularioArticulo?.valid) {
      const idArticulo = this.formularioArticulo.get('Id_Articulo')?.value;
      if (idArticulo !== undefined) {
        const nuevosDatos = this.formularioArticulo.value;
        this.addService.editarArticulo('Articulo', idArticulo, nuevosDatos).subscribe((resultado) => {
          // Realiza acciones después de editar
        });
      }
    }
  }
}