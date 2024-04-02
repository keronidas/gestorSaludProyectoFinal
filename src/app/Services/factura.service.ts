import { Injectable } from '@angular/core';
import { PacientesService } from './pacientes.service';
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private pacienteService: PacientesService, private sesionService: SesionService) {

  }

  getDatosImaginarios() {
    return this.items;
  }

  obtenerFacturasByPacienteId(id: number) {
    let facturas: any = [];
    this.items.forEach(item => {
      if (item.pacienteId === id) {
        facturas.push(item);
      }
    });
    return facturas;
  }
  addDatosImaginarios(items: any) {
    items.id = this.items.length + 1;
    this.items.push(items);
  }

  items = [
    { id: 1, codigo_verificacion: '1234567890', fechaCreacion: '2021-10-12', fechaFacturacion: '2022-10-22', pacienteId: 1, importe: 50, descuento_general: 10, estado: 'pendiente', sesionId: [1, 2, 3] },
    { id: 2, codigo_verificacion: '0987654321', fechaCreacion: '2021-10-12', fechaFacturacion: '2022-10-22', pacienteId: 2, importe: 60, descuento_general: 15, estado: 'pendiente', sesionId: [4, 5, 6] },
    { id: 3, codigo_verificacion: '2468135790', fechaCreacion: '2021-10-12', fechaFacturacion: '2022-10-22', pacienteId: 3, importe: 40, descuento_general: 5, estado: 'pendiente', sesionId: [7, 8, 9] },
    { id: 4, codigo_verificacion: '1357924680', fechaCreacion: '2021-10-12', fechaFacturacion: '2022-10-22', pacienteId: 4, importe: 70, descuento_general: 20, estado: 'pendiente', sesionId: [10, 11, 12] },
    { id: 5, codigo_verificacion: '5678901234', fechaCreacion: '2021-10-12', fechaFacturacion: '2022-10-22', pacienteId: 5, importe: 80, descuento_general: 25, estado: 'pendiente', sesionId: [13, 14, 15] },
    { id: 6, codigo_verificacion: '9876543210', fechaCreacion: '2021-10-12', fechaFacturacion: '2022-10-22', pacienteId: 1, importe: 90, descuento_general: 30, estado: 'pendiente', sesionId: [16, 17, 18] },
    { id: 7, codigo_verificacion: '3216549870', fechaCreacion: '2021-10-12', fechaFacturacion: '2022-10-22', pacienteId: 2, importe: 100, descuento_general: 35, estado: 'pendiente', sesionId: [19, 20, 21] },
    { id: 8, codigo_verificacion: '7412589630', fechaCreacion: '2021-10-12', fechaFacturacion: '2022-10-22', pacienteId: 3, importe: 110, descuento_general: 40, estado: 'pendiente', sesionId: [22, 23, 24] },
    { id: 9, codigo_verificacion: '1593572468', fechaCreacion: '2021-10-12', fechaFacturacion: '2022-10-22', pacienteId: 4, importe: 120, descuento_general: 45, estado: 'pendiente', sesionId: [25, 26, 27] },
    { id: 10, codigo_verificacion: '3692581470', fechaCreacion: '2021-10-12', fechaFacturacion: '2022-10-22', pacienteId: 5, importe: 130, descuento_general: 50, estado: 'pendiente', sesionId: [28, 29, 30] }
  ];
}
