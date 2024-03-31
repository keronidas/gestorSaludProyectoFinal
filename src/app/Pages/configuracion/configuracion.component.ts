import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.scss'
})
export class ConfiguracionComponent {
  formulario!: FormGroup;
  personaElegida: boolean = false;
  edita_historia_clinica!: FormControl;
  edita_clientes: boolean = false;
  edita_profesionales: boolean = false;
  edita_usuarios: boolean = false;
  edita_material: boolean = false;
  edita_facturas: boolean = false;
  edita_oficios: boolean = false;
  visualiza_historia_clinica: boolean = false;
  visualiza_clientes: boolean = false;
  visualiza_profesionales: boolean = false;
  visualiza_usuarios: boolean = false;
  visualiza_material: boolean = false;
  visualiza_facturas: boolean = false;
  visualiza_oficios: boolean = false;
  items: any[] = [
    {
      id: 1,
      nombreCompleto: "Juan Pérez",
      edita_historia_clinica: true,
      edita_clientes: false,
      edita_profesionales: true,
      edita_usuarios: false,
      edita_material: true,
      edita_facturas: false,
      edita_oficios: true,
      visualiza_historia_clinica: true,
      visualiza_clientes: false,
      visualiza_profesionales: true,
      visualiza_usuarios: false,
      visualiza_material: true,
      visualiza_facturas: false,
      visualiza_oficios: true
    },
    {
      id: 2,
      nombreCompleto: "María Rodríguez",
      edita_historia_clinica: false,
      edita_clientes: true,
      edita_profesionales: false,
      edita_usuarios: true,
      edita_material: false,
      edita_facturas: true,
      edita_oficios: false,
      visualiza_historia_clinica: false,
      visualiza_clientes: true,
      visualiza_profesionales: false,
      visualiza_usuarios: true,
      visualiza_material: false,
      visualiza_facturas: true,
      visualiza_oficios: false
    },
    {
      id: 3,
      nombreCompleto: "Pedro González",
      edita_historia_clinica: true,
      edita_clientes: true,
      edita_profesionales: true,
      edita_usuarios: true,
      edita_material: true,
      edita_facturas: true,
      edita_oficios: true,
      visualiza_historia_clinica: true,
      visualiza_clientes: true,
      visualiza_profesionales: true,
      visualiza_usuarios: true,
      visualiza_material: true,
      visualiza_facturas: true,
      visualiza_oficios: true
    },
    {
      id: 4,
      nombreCompleto: "Ana Martínez",
      edita_historia_clinica: false,
      edita_clientes: false,
      edita_profesionales: false,
      edita_usuarios: false,
      edita_material: false,
      edita_facturas: false,
      edita_oficios: false,
      visualiza_historia_clinica: false,
      visualiza_clientes: false,
      visualiza_profesionales: false,
      visualiza_usuarios: false,
      visualiza_material: false,
      visualiza_facturas: false,
      visualiza_oficios: false
    },
    {
      id: 5,
      nombreCompleto: "Laura Díaz",
      edita_historia_clinica: true,
      edita_clientes: true,
      edita_profesionales: false,
      edita_usuarios: false,
      edita_material: true,
      edita_facturas: true,
      edita_oficios: false,
      visualiza_historia_clinica: true,
      visualiza_clientes: true,
      visualiza_profesionales: false,
      visualiza_usuarios: false,
      visualiza_material: true,
      visualiza_facturas: true,
      visualiza_oficios: false
    },
    {
      id: 6,
      nombreCompleto: "Carlos Sánchez",
      edita_historia_clinica: true,
      edita_clientes: false,
      edita_profesionales: true,
      edita_usuarios: false,
      edita_material: true,
      edita_facturas: true,
      edita_oficios: false,
      visualiza_historia_clinica: true,
      visualiza_clientes: false,
      visualiza_profesionales: true,
      visualiza_usuarios: false,
      visualiza_material: true,
      visualiza_facturas: true,
      visualiza_oficios: false
    },
    {
      id: 7,
      nombreCompleto: "Lucía Pérez",
      edita_historia_clinica: false,
      edita_clientes: true,
      edita_profesionales: false,
      edita_usuarios: true,
      edita_material: false,
      edita_facturas: true,
      edita_oficios: false,
      visualiza_historia_clinica: false,
      visualiza_clientes: true,
      visualiza_profesionales: false,
      visualiza_usuarios: true,
      visualiza_material: false,
      visualiza_facturas: true,
      visualiza_oficios: false
    },
    {
      id: 8,
      nombreCompleto: "Sofía López",
      edita_historia_clinica: true,
      edita_clientes: true,
      edita_profesionales: true,
      edita_usuarios: true,
      edita_material: true,
      edita_facturas: true,
      edita_oficios: true,
      visualiza_historia_clinica: true,
      visualiza_clientes: true,
      visualiza_profesionales: true,
      visualiza_usuarios: true,
      visualiza_material: true,
      visualiza_facturas: true,
      visualiza_oficios: true
    },
    {
      id: 9,
      nombreCompleto: "Diego García",
      edita_historia_clinica: false,
      edita_clientes: false,
      edita_profesionales: false,
      edita_usuarios: false,
      edita_material: false,
      edita_facturas: false,
      edita_oficios: false,
      visualiza_historia_clinica: false,
      visualiza_clientes: false,
      visualiza_profesionales: false,
      visualiza_usuarios: false,
      visualiza_material: false,
      visualiza_facturas: false,
      visualiza_oficios: false
    },
    {
      id: 10,
      nombreCompleto: "Elena Martín",
      edita_historia_clinica: true,
      edita_clientes: false,
      edita_profesionales: true,
      edita_usuarios: false,
      edita_material: true,
      edita_facturas: false,
      edita_oficios: true,
      visualiza_historia_clinica: true,
      visualiza_clientes: false,
      visualiza_profesionales: true,
      visualiza_usuarios: false,
      visualiza_material: true,
      visualiza_facturas: false,
      visualiza_oficios: true
    }
  ];

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      edita_historia_clinica: [false],
      edita_clientes: [false],
      // Agrega más controles según sea necesario
    });
  }

  cambiarValorSeleccion() {
    this.personaElegida = true;
  }


}