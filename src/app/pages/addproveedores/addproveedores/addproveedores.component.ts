import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddproveedoresService } from 'src/app/services/addProveedores/addproveedores.service';
import { DataSharingService } from 'src/app/services/data/data-sharing.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addproveedores',
  templateUrl: './addproveedores.component.html',
  styleUrls: ['./addproveedores.component.css']
})
export class AddproveedoresComponent implements OnInit, OnDestroy {
  public formularioArticulo: FormGroup;

  isEditing: boolean = false;
  idArticulo: number;

  private dataSubscription: Subscription;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private addprovedores: AddproveedoresService, private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.inicializarFormulario();

    this.route.paramMap.subscribe(params => {
      const valorBooleano = params.get('valorBooleano');
      if (valorBooleano === 'true') {
        // Asigna el valor a una variable en tu componente
        this.isEditing = true; // Aquí miVariable es una variable en tu componente
        this.dataSubscription = this.dataSharingService.obtenerData().subscribe(articulo => {
          if (articulo) {
            this.idArticulo = articulo.Id_Articulo;
          }
        });
      }
    });

    //Editar
    this.dataSubscription = this.dataSharingService.obtenerData().subscribe(proveedor => {
      if (proveedor && this.isEditing === false) {
        this.isEditing = !this.isEditing;
        this.procesarDatos(proveedor);
      } else {
        this.isEditing = false;
        this.inicializarFormulario();
      }
    });
  }

  ngOnDestroy() {
  }

  inicializarFormulario() {
    this.formularioArticulo = this.fb.group({
      Id_Proveedor: ['', Validators.required],
      Nombre: ['', Validators.required],
      Direccion: ['', Validators.required],
      Telefono: ['', Validators.required],
      Precio: ['', Validators.required],
    });
  }

  crearProveedor() {
    if (this.formularioArticulo.valid) {
      const nuevoProveedor = this.formularioArticulo.value;
  
      const nombreProveedor = nuevoProveedor.Nombre; // Asegúrate de usar 'Nombre' en lugar de 'nombre'
      const idProveedor = nuevoProveedor.Id_Proveedor; // Asegúrate de usar 'Id_Proveedor'
      const precio = nuevoProveedor.Precio; // Reemplaza 'Precio' con la propiedad real
  
      // Realiza la búsqueda del proveedor por nombre
      this.addprovedores.buscarRegistro('Proveedores', { Nombre: nombreProveedor }).subscribe((resultados) => {
        if (resultados) {
          // El proveedor ya existe, puedes mostrar un mensaje de error o realizar otras acciones
          // Crea un objeto para la relación entre proveedor y artículo
          const provArtData = {
            Id_Prov: idProveedor,
            Id_Art: this.idArticulo,
            Precio: precio,
          };

          // Llama al método para crear la relación
          this.addprovedores.crearProv_Art(provArtData).subscribe((relacionResultado) => {
          // Realiza acciones adicionales después de crear la relación

          });
          console.log('El proveedor ya existe:', resultados);
        } else {
          // No se encontraron resultados, puedes proceder a crear el nuevo proveedor
          // Guardar los demás datos en un objeto
          const datosRestantes = {
            Id_Proveedor: idProveedor, // Usar 'idProveedor' en lugar de 'nuevoProveedor.Id_Proveedor'
            Nombre: nombreProveedor,
            Direccion: nuevoProveedor.Direccion, // Asegúrate de usar las propiedades correctas
            Telefono: nuevoProveedor.Telefono,
          };
  
          this.addprovedores.crearProveedor(datosRestantes).subscribe((resultado) => {
            // Crea un objeto para la relación entre proveedor y artículo
            const provArtData = {
              Id_Prov: idProveedor,
              Id_Art: this.idArticulo,
              Precio: precio,
            };

            // Llama al método para crear la relación
            this.addprovedores.crearProv_Art(provArtData).subscribe((relacionResultado) => {
            // Realiza acciones adicionales después de crear la relación
            });
          });
        }
      });
    }
  }

  procesarDatos(proveedor: any) {
    // Aquí puedes procesar los datos o asignarlos a variables para su uso posterior
    let idproveedor = proveedor.Id_Proveedor;
    let nombre = proveedor.Nombre;
    let direccion = proveedor.Direccion;
    let telefono = proveedor.Telefono;

    // Llena el formulario con los datos
    this.formularioArticulo.patchValue({
      Id_Proveedor: idproveedor,
      Nombre: nombre,
      Direccion: direccion,
      Telefono: telefono,
    });
  }

  editarProveedor() {
    const idProveedor = this.formularioArticulo.get('Id_Proveedor')?.value;
    const nombre = this.formularioArticulo.get('Nombre')?.value;
    const direccion = this.formularioArticulo.get('Direccion')?.value;
    const telefono = this.formularioArticulo.get('Telefono')?.value;

    if (idProveedor !== undefined && nombre !== undefined && direccion !== undefined && telefono !== undefined) {
      const nuevosDatos = {
        Id_Proveedor: idProveedor,
        Nombre: nombre,
        Direccion: direccion,
        Telefono: telefono,
      };

      this.addprovedores.editarProveedor(idProveedor, nuevosDatos).subscribe((resultado) => {
        // Realiza acciones después de editar
      });
    }
  }
}
