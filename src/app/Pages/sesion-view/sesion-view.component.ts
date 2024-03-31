import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sesion-view',
  templateUrl: './sesion-view.component.html',
  styleUrl: './sesion-view.component.scss'
})
export class SesionViewComponent implements OnInit {
  id!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
  }
}