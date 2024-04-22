import { Component, ViewChild } from '@angular/core';
import { ProfesionalService } from '../../Services/profesional.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfesionalDto } from '../../Models/profesionalDto';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.scss'
})
export class ProfesionalesComponent {
  crearProfesional: boolean = false;
  profesionals: any[] = [];
  displayedColumns: string[] = ['name', 'email', 'profesion', 'city', 'number', "options"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private profesionalService: ProfesionalService, private _formBuilder: FormBuilder, private snackbar: MatSnackBar, private router: Router) {
    this.profesionalService.getProfesionals()
      .subscribe(profesionals => {
        this.profesionals = profesionals.sort((a, b) => a.name.localeCompare(b.name));
        this.dataSource = new MatTableDataSource(this.profesionals);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  formularioProfesional = this._formBuilder.group({
    name: ['', Validators.required],
    profesion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    birthdate: ['', Validators.required],
    city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    number: ['', [Validators.required, Validators.pattern(/^[0-9]{7,12}$/)]] // 10 dígitos
  });
  fnCrearProfesional(): void {
    this.crearProfesional = true;
  }
  fnProfesionalCreado(): void {
    this.crearProfesional = false;
    if (this.formularioProfesional.valid) {
      this.profesionalService.addProfesional(this.formularioProfesional.value)
        .subscribe(patient => {
          // Mostrar el mensaje de confirmación
          this.showSnackbar(`Profesional creado!`);

          // Reiniciar el formulario
          this.formularioProfesional.reset();

          // Obtener los pacientes actualizados del servicio
          this.profesionalService.getProfesionals().subscribe(profes => {
            // Actualizar la lista de pacientes
            this.profesionals = profes.sort((a, b) => a.name.localeCompare(b.name));

          });
        });
    }
  }
  fnCancelar(): void {
    this.crearProfesional = false;
    this.formularioProfesional.reset();
  }
  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {

    });
    const uniqueId = new Date().getTime(); // Genera un ID único basado en la marca de tiempo actual
    this.router.navigate(['/profesionales'], { queryParams: { refresh: uniqueId } });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
