import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesionalService } from '../../Services/profesional.service';
import { ProfesionalDto } from '../../Models/profesionalDto';
import { SesionService } from '../../Services/sesion.service';

@Component({
  selector: 'app-profesional-view',
  templateUrl: './profesional-view.component.html',
  styleUrl: './profesional-view.component.scss'
})
export class ProfesionalViewComponent implements OnInit {
  id!: string;
  profesional!: ProfesionalDto;
  isLoading: boolean = true;
  sesiones: any = [];
  constructor(private route: ActivatedRoute, private profesionalService: ProfesionalService, private sesionService: SesionService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    // Se establece isLoading en true antes de la carga
    this.isLoading = true;

    // Se hace la llamada al servicio para obtener el profesional
    this.profesionalService.getProfesionalById(this.id)
      .subscribe(profesional => {
        this.profesional = profesional;
        console.log(this.profesional);
        // Se establece isLoading en false cuando la carga ha finalizado 
        this.isLoading = false;
      });
    this.sesionService.getSesionByProfesionalId(this.id)
      .subscribe(sesiones => this.sesiones = sesiones);

      this.sesionService.getSesions().subscribe(sesiones => {
        console.log(sesiones);
      });
  }
}
