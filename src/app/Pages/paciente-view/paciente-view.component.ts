import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacientesService } from '../../Services/pacientes.service';
import { SesionService } from '../../Services/sesion.service';
import { FacturaService } from '../../Services/factura.service';


@Component({
  selector: 'app-paciente-view',
  templateUrl: './paciente-view.component.html',
  styleUrl: './paciente-view.component.scss'
})
export class PacienteViewComponent implements OnInit {
  id!: string;
  public patients: any = {};
  sesiones: any = [];
  facturas: any = [];

  constructor(private route: ActivatedRoute, private pacienteService: PacientesService, private sesionService: SesionService, private facturasService: FacturaService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.pacienteService.getPatientById(this.id)
      .subscribe(patients=> this.patients=patients);
    console.log(this.id);
    console.log(this.patients)
    this.sesiones = this.sesionService.obtenerSesionesByPacienteId(parseInt(this.id));
    this.facturas = this.facturasService.obtenerFacturasByPacienteId(parseInt(this.id));
  }
}