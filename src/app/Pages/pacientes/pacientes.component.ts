import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { PacientesService } from '../../Services/pacientes.service';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PacienteTableData } from '../../Models/pacienteTableData';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SesionService } from '../../Services/sesion.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.scss'
})
export class PacientesComponent {
  // private readonly _formbuilder = inject(FormBuilder);
  crearPaciente: boolean = false;
  crearSesion: boolean = false;
  public patients: any[] = [];
  public profesionales: any[] = [];

  // ANGULAR MATERIAL TABLE
  displayedColumns: string[] = ['name', 'email', 'birthdate', 'city', 'number', "options"];
  dataSource!: MatTableDataSource<PacienteTableData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private servicio: PacientesService, private _formBuilder: FormBuilder, private snackbar: MatSnackBar, private router: Router, private sesionService: SesionService) {
    this.servicio.getPatients()
      .subscribe(patients => {
        this.patients = patients.sort((a, b) => a.name.localeCompare(b.name));
        this.dataSource = new MatTableDataSource(this.patients);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  get currentPatient(): any {
    const hero = this.formularioCliente.value as any;
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

  formularioCliente = this._formBuilder.nonNullable.group({
    name: ['', Validators.required],
    profesion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    birthdate: ['', Validators.required],
    city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    number: ['', [Validators.required, Validators.pattern(/^[0-9]{7,12}$/)]] // 10 dígitos
  });

  formularioSesion = this._formBuilder.group({
    date: ['', Validators.required],
    cost: ['', Validators.required],
    patient: ['', Validators.required],
    profesionales: ['', Validators.required]
  });


  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {

    });
    const uniqueId = new Date().getTime(); // Genera un ID único basado en la marca de tiempo actual
    this.router.navigate(['/pacientes'], { queryParams: { refresh: uniqueId } });
  }

  fnCrearPaciente(): void {
    this.crearPaciente = true;
  }
  fnPacienteCreado(): void {
    this.crearPaciente = false;
    if (this.formularioCliente.valid) {
      this.servicio.addPatient(this.currentPatient)
        .subscribe(patient => {
          // Mostrar el mensaje de confirmación
          this.showSnackbar(`Paciente creado!`);

          // Reiniciar el formulario
          this.formularioCliente.reset();

          // Obtener los pacientes actualizados del servicio
          this.servicio.getPatients().subscribe(patients => {
            // Actualizar la lista de pacientes
            this.patients = patients.sort((a, b) => a.name.localeCompare(b.name));

            // Actualizar la fuente de datos de la tabla
            this.dataSource.data = this.patients;
          });
        });
    }
  }
  fnCancelar(): void {
    this.crearPaciente = false;
    this.crearSesion = false;
    this.formularioCliente.reset();
  }
  fnCrearSesion(): void {
    this.crearSesion = true;
  }
  fnSesionCreada(): void {
    this.crearSesion = false;
  }
  deletePatient(id: string): void {
    this.servicio.deltePatientById(id)
      .subscribe(() => {
        this.showSnackbar(`Paciente eliminado!`);
        this.servicio.getPatients().subscribe(patients => {
          this.patients = patients.sort((a, b) => a.name.localeCompare(b.name));
          this.dataSource.data = this.patients;
        });
      });
  }

  datos: any[] = [1, 2, 3, 4, 5, 6];

}
