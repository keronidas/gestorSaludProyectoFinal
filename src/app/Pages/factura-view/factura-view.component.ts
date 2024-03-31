import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factura-view',
  templateUrl: './factura-view.component.html',
  styleUrl: './factura-view.component.scss'
})
export class FacturaViewComponent implements OnInit {
  id!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
  }
}
