import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sala-tratamiento-view',
  templateUrl: './sala-tratamiento-view.component.html',
  styleUrl: './sala-tratamiento-view.component.scss'
})
export class SalaTratamientoViewComponent  implements OnInit {
  id!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
  }
}