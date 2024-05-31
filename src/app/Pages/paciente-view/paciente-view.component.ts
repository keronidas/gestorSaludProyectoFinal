import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacientesService } from '../../Services/pacientes.service';
import { SesionService } from '../../Services/sesion.service';


@Component({
  selector: 'app-paciente-view',
  templateUrl: './paciente-view.component.html',
  styleUrl: './paciente-view.component.scss'
})
export class PacienteViewComponent implements OnInit {
  id!: string;
  patients: any = {};
  sesiones: any = [
  
  ];
  facturas: any = [
    {
      precio: 150.75,
      pagada: true,
      fechaEmision: '2024-01-01',
      fechaPago: '2024-01-10'
    },
    {
      precio: 200.00,
      pagada: false,
      fechaEmision: '2024-02-15'
    },
    {
      precio: 99.99,
      pagada: true,
      fechaEmision: '2024-03-05',
      fechaPago: '2024-03-20'
    },
    {
      precio: 250.50,
      pagada: false,
      fechaEmision: '2024-04-10'
    },
    {
      precio: 175.00,
      pagada: true,
      fechaEmision: '2024-05-25',
      fechaPago: '2024-06-05'
    }
  ];

  constructor(private route: ActivatedRoute, private pacienteService: PacientesService, private sesionService: SesionService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.pacienteService.getPatientById(this.id)
      .subscribe(patients => {
        this.patients = patients;
      });
    this.sesionService.getSesionByPatientId(this.id)
      .subscribe(sesiones => {
        this.sesiones = sesiones;
        console.log(sesiones)
      }
      );

  }
}