import { Component, ViewChild } from '@angular/core';
import { PacienteTableData } from '../../Models/pacienteTableData';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SalasTratamientoService } from '../../Services/salas-tratamiento.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salas-tratamiento',
  templateUrl: './salas-tratamiento.component.html',
  styleUrl: './salas-tratamiento.component.scss'
})
export class SalasTratamientoComponent {
  crearSala: boolean = false;
  displayedColumns: string[] = ["id", 'name', 'description', "options",];
  dataSource!: MatTableDataSource<PacienteTableData>;
  salas: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private servicio: SalasTratamientoService, private _formBuilder: FormBuilder, private snackbar: MatSnackBar, private router: Router) {
    this.servicio.getSalas()
      .subscribe(salas => {
        this.salas = salas.sort((a, b) => a.name.localeCompare(b.name));
        this.dataSource = new MatTableDataSource(this.salas);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.salas)
      });
  }
  formularioSala = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {

    });
    const uniqueId = new Date().getTime(); // Genera un ID único basado en la marca de tiempo actual
    this.router.navigate(['/salas-tratamiento'], { queryParams: { refresh: uniqueId } });
  }
  delete(id: String): void {
    this.servicio.deleteSala(id);
  }
  fnCancelar(): void {
    this.crearSala = false;
    this.formularioSala.reset();
  }
  fnCrearSalas(): void {
    this.crearSala = true;
  }
  fnProfesionalCreado(): void {
    this.crearSala = false;
    if (this.formularioSala.valid) {
      this.servicio.addSala(this.formularioSala.value)
        .subscribe(sala => {
          // Mostrar el mensaje de confirmación
          this.showSnackbar(`Profesional creado!`);

          // Reiniciar el formulario
          this.formularioSala.reset();

          // Obtener los pacientes actualizados del servicio
          this.servicio.getSalas().subscribe(profes => {
            // Actualizar la lista de pacientes
            this.salas = profes.sort((a, b) => a.name.localeCompare(b.name));

          });
        });
    }
  }

}
