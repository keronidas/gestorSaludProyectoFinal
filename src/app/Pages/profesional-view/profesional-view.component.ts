import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profesional-view',
  templateUrl: './profesional-view.component.html',
  styleUrl: './profesional-view.component.scss'
})
export class ProfesionalViewComponent implements OnInit {
  id!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
  }
}