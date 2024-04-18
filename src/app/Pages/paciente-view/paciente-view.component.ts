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
  sesiones: any = [];

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