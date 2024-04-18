import { Component } from '@angular/core';
import { ProfesionalService } from '../../Services/profesional.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfesionalDto } from '../../Models/profesionalDto';


@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.scss'
})
export class ProfesionalesComponent {

  profesionals: ProfesionalDto[] = [];
  constructor(private profesionalService: ProfesionalService, private _formBuilder: FormBuilder, private snackbar: MatSnackBar) {
    this.profesionalService.getProfesionals()
      .subscribe(profesionals => {
        this.profesionals = profesionals.sort((a, b) => a.name.localeCompare(b.name));
        console.log(this.profesionals);

      });
  }

}
