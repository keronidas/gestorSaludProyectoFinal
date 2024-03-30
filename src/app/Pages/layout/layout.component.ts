import { Component } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public sidebarItems = [
    { label: 'Pacientes', icon: 'groups', url: 'pacientes' },
    { label: 'Profesionales', icon: 'medication_liquid', url: 'profesionales' },
    { label: 'Salas tratamiento', icon: 'home_and_garden', url: 'salas-tratamiento' },
    { label: 'Calendario', icon: 'calendar_today', url: './calendario' },
    { label: 'Material', icon: 'inventory_2', url: 'material' },
    { label: 'Facturas', icon: 'receipt_long', url: 'facturas' },
    { label: 'Configuración', icon: 'settings', url: 'configuracion' }
  ]
}
