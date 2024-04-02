import { Injectable } from '@angular/core';
import { PacientesService } from './pacientes.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(private pacienteService: PacientesService) { }

  getDatosImaginarios() {
    return this.items;
  }

  obtenerSesionesByPacienteId(id: number) {
    let sesiones: any = [];
    this.items.forEach(item => {
      if (item.pacienteId === id) {
        sesiones.push(item);
      }
    });
    return sesiones;
  }
  addDatosImaginarios(items: any) {
    items.id = this.items.length + 1;
    this.items.push(items);
  }


  //Aqui los datos imaginarios 
  items = [
    { id: 1, profesionalId: 2, pacienteId: 1, fecha: '2021-06-01', motivo: 'Dolor de muelas', diagnostico: 'Caries', tratamiento: 'Empaste con retracción gingival', coste: 50, descuento: 0, facturaId: 1 },
    { id: 2, profesionalId: 1, pacienteId: 2, fecha: '2021-06-02', motivo: 'Dolor de estómago', diagnostico: 'Gastritis', tratamiento: 'Antiacidos y dieta blanda', coste: 60, descuento: 0, facturaId: 2 },
    { id: 3, profesionalId: 3, pacienteId: 3, fecha: '2021-06-03', motivo: 'Mareos y vértigos', diagnostico: 'Vértigo posicional paroxístico benigno', tratamiento: 'Maniobras de reposición canalicular', coste: 40, descuento: 0, facturaId: 3 },
    { id: 4, profesionalId: 4, pacienteId: 4, fecha: '2021-06-04', motivo: 'Fiebre y dolor de garganta', diagnostico: 'Faringitis aguda', tratamiento: 'Antibióticos y antiinflamatorios', coste: 150, descuento: 0, facturaId: 4 },
    { id: 5, profesionalId: 1, pacienteId: 5, fecha: '2021-06-05', motivo: 'Problemas de sueño', diagnostico: 'Insomnio', tratamiento: 'Higiene del sueño y terapia cognitivo-conductual', coste: 70, descuento: 0, facturaId: 5 },
    { id: 6, profesionalId: 2, pacienteId: 1, fecha: '2021-06-06', motivo: 'Dolor de espalda', diagnostico: 'Contractura muscular', tratamiento: 'Fisioterapia y ejercicio terapéutico', coste: 80, descuento: 0, facturaId: 6 },
    { id: 7, profesionalId: 3, pacienteId: 2, fecha: '2021-06-07', motivo: 'Problemas de visión', diagnostico: 'Miopía', tratamiento: 'Uso de lentes correctivas', coste: 90, descuento: 0, facturaId: 7 },
    { id: 8, profesionalId: 4, pacienteId: 3, fecha: '2021-06-08', motivo: 'Dolor abdominal', diagnostico: 'Apendicitis aguda', tratamiento: 'Cirugía de apendicectomía', coste: 200, descuento: 0, facturaId: 8 },
    { id: 9, profesionalId: 1, pacienteId: 4, fecha: '2021-06-09', motivo: 'Dolor de cabeza', diagnostico: 'Migraña', tratamiento: 'Medicamentos para aliviar el dolor y evitar la recurrencia', coste: 75, descuento: 0, facturaId: 9 },
    { id: 10, profesionalId: 2, pacienteId: 5, fecha: '2021-06-10', motivo: 'Problemas de tiroides', diagnostico: 'Hipotiroidismo', tratamiento: 'Hormona tiroidea sintética', coste: 120, descuento: 0, facturaId: 10 },
    { id: 11, profesionalId: 3, pacienteId: 1, fecha: '2021-06-11', motivo: 'Tos persistente', diagnostico: 'Bronquitis crónica', tratamiento: 'Broncodilatadores y ejercicios respiratorios', coste: 85, descuento: 0, facturaId: 11 },
    { id: 12, profesionalId: 4, pacienteId: 2, fecha: '2021-06-12', motivo: 'Problemas de audición', diagnostico: 'Pérdida de audición', tratamiento: 'Aparatos auditivos', coste: 180, descuento: 0, facturaId: 12 },
    { id: 13, profesionalId: 1, pacienteId: 3, fecha: '2021-06-13', motivo: 'Problemas de rodilla', diagnostico: 'Lesión del ligamento cruzado anterior', tratamiento: 'Rehabilitación y posible cirugía', coste: 100, descuento: 0, facturaId: 13 },
    { id: 14, profesionalId: 2, pacienteId: 4, fecha: '2021-06-14', motivo: 'Problemas de la piel', diagnostico: 'Dermatitis atópica', tratamiento: 'Hidratantes y cremas antiinflamatorias', coste: 65, descuento: 0, facturaId: 14 },
    { id: 15, profesionalId: 3, pacienteId: 5, fecha: '2021-06-15', motivo: 'Problemas de ansiedad', diagnostico: 'Trastorno de ansiedad generalizada', tratamiento: 'Terapia cognitivo-conductual y posiblemente medicación', coste: 110, descuento: 0, facturaId: 15 },
    { id: 16, profesionalId: 4, pacienteId: 1, fecha: '2021-06-16', motivo: 'Dolor en las articulaciones', diagnostico: 'Artritis reumatoide', tratamiento: 'Medicamentos antiinflamatorios y terapia física', coste: 95, descuento: 0, facturaId: 16 },
    { id: 17, profesionalId: 1, pacienteId: 2, fecha: '2021-06-17', motivo: 'Problemas de tiroides', diagnostico: 'Hipertiroidismo', tratamiento: 'Medicamentos antitiroideos y posible yodo radioactivo', coste: 125, descuento: 0, facturaId: 17 },
    { id: 18, profesionalId: 2, pacienteId: 3, fecha: '2021-06-18', motivo: 'Dolor de oído', diagnostico: 'Otitis media', tratamiento: 'Antibióticos y analgésicos', coste: 55, descuento: 0, facturaId: 18 },
    { id: 19, profesionalId: 3, pacienteId: 4, fecha: '2021-06-19', motivo: 'Problemas de sueño', diagnostico: 'Apnea del sueño', tratamiento: 'Uso de dispositivo de presión positiva continua en las vías respiratorias (CPAP)', coste: 130, descuento: 0, facturaId: 19 },
    { id: 20, profesionalId: 4, pacienteId: 5, fecha: '2021-06-20', motivo: 'Problemas de fertilidad', diagnostico: 'Infertilidad masculina', tratamiento: 'Estudios hormonales y posiblemente técnicas de reproducción asistida', coste: 150, descuento: 0, facturaId: 20 }
  ];
}
