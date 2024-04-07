import { Component, OnInit, inject } from '@angular/core';
import { PacientesService } from '../../Services/pacientes.service';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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



  constructor(private servicio: PacientesService, private _formBuilder: FormBuilder,  private snackbar: MatSnackBar,private router: Router) {
    
  }
  get currentPatient(): any {
    const hero = this.formularioCliente.value as any;
    return hero;
  }

  ngOnInit(): void {
    this.servicio.getPatients()
      .subscribe(patients=> this.patients = patients.sort((a, b) => a.name.localeCompare(b.name)));
      
  }

  formularioCliente = this._formBuilder.nonNullable.group({
    name: ['', Validators.required],
    profesion: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    birthdate: ['', Validators.required],
    city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    number: ['', [Validators.required, Validators.pattern(/^[0-9]{7,12}$/)]] // 10 dígitos
  });

  formularioSesion = this._formBuilder.group({
    date: ['', Validators.required],
    hour: ['', Validators.required],
    duration: ['', Validators.required],
    cost: ['', Validators.required],
    patient: ['', Validators.required],
    status: ['', Validators.required]
  });



  // Variables para la paginación
  currentPage = 1;
  itemsPerPage = 20;
  itemsPerPageOptions = [5, 10, 25, 50, 100, 1000];

  // Método para calcular el número total de páginas
  get totalPages(): number[] {
    const totalPagesCount = Math.ceil(this.patients.length / this.itemsPerPage);
    return Array(totalPagesCount).fill(0).map((x, i) => i + 1);
  }

  // Método para obtener los elementos de la página actual
  get currentPageItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.patients.slice(startIndex, endIndex);
  }
  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'done', {
      duration: 2500,
    })
  }
  // Método para cambiar la página actual
  setCurrentPage(page: number): void {
    this.currentPage = page;
  }
  onItemsPerPageChange(value: number): void {
    // console.log('Items per page changed to: ', value);

    // Lógica para manejar el cambio de número de items por página
    // Puedes recalcular la página actual o ajustar la lógica de paginación según sea necesario
    this.currentPage = 1; // Resetear a la primera página cuando cambie el número de items por página
  }
  fnCrearPaciente(): void {
    this.crearPaciente = true;
  }
  fnPacienteCreado(): void {
    this.crearPaciente = false;
    if (this.formularioCliente.valid) {
      
      // this.servicio.addDatosImaginarios(this.formularioCliente.value);

      this.servicio.addPatient(this.currentPatient)
      .subscribe(patient=>{
        this.showSnackbar(`${ patient.name } created!`);
      })
      this.formularioCliente.reset();
 

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
  guardarPaciente(): void {

  }
}
