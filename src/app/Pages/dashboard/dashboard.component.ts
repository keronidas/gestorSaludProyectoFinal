import { Component } from '@angular/core';
import { PacientesService } from '../../Services/pacientes.service';
import { SesionService } from '../../Services/sesion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  pacientesTratados: number;
  numeroSesiones: number;
  facturacion: number;
  constructor(private pacienteService: PacientesService, private sesionService: SesionService) {
    this.pacientesTratados = this.pacienteService.getDatosImaginarios().length;
    this.numeroSesiones = this.sesionService.getDatosImaginarios().length;
    this.facturacion = this.sesionService.getDatosImaginarios().reduce((acc, item) => acc + item.coste, 0);
  }

}
