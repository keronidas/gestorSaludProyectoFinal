import { Component, ViewChild } from '@angular/core';
import { PacienteTableData } from '../../Models/pacienteTableData';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FacturaService } from '../../Services/factura.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.scss'
})
export class FacturasComponent {
  crearFactura: boolean = false;
  public facturas: any[] = [];

  // ANGULAR MATERIAL TABLE
  displayedColumns: string[] = ['id', 'CSV', 'dateCreation', 'state', "discount", "cost", "options"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private servicio: FacturaService, private _formBuilder: FormBuilder, private snackbar: MatSnackBar, private router: Router) {
    this.servicio.getFactura()
      .subscribe(facturas => {
        this.facturas = facturas.sort((a, b) => a.id.localeCompare(b.id));
        this.dataSource = new MatTableDataSource(this.facturas);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  get currentFactura(): any {
    const hero = this.formularioFactura.value as any;
    return hero;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {

  }

  formularioFactura = this._formBuilder.nonNullable.group({
    name: ['', Validators.required],
    profesion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    birthdate: ['', Validators.required],
    city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    number: ['', [Validators.required, Validators.pattern(/^[0-9]{7,12}$/)]] // 10 dígitos
  });




  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {

    });
    const uniqueId = new Date().getTime(); // Genera un ID único basado en la marca de tiempo actual
    this.router.navigate(['/facturas'], { queryParams: { refresh: uniqueId } });
  }

  fnCrearFacturas(): void {
    this.crearFactura = true;
  }
  fnFacturasCreado(): void {
    this.crearFactura = false;
    if (this.formularioFactura.valid) {
      this.servicio.addFactura(this.currentFactura)
        .subscribe(patient => {
          // Mostrar el mensaje de confirmación
          this.showSnackbar(`Factura creado!`);

          // Reiniciar el formulario
          this.formularioFactura.reset();

          // Obtener los pacientes actualizados del servicio
          this.servicio.getFactura().subscribe(facturas => {
            // Actualizar la lista de pacientes
            this.facturas = facturas.sort((a, b) => a.id.localeCompare(b.id));

            // Actualizar la fuente de datos de la tabla
            this.dataSource.data = this.facturas;
          });
        });
    }
  }
  fnCancelar(): void {
    this.crearFactura = false;
    this.formularioFactura.reset();
  }





}
