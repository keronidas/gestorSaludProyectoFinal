import { Injectable } from '@angular/core';
import { PacientesService } from './pacientes.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  apiUrl: string = 'http://localhost:8078/api';

  constructor(private http: HttpClient) { }

  patients: any = {};

  facturas: any = [];

  //Aqui funciones con base de datos

  //Obtener todos los usuarios
  getSesions(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/sesiones`);
  }

  addSesion(patient: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sesiones`, patient);
  }

  getSesionByPatientId(id: string): Observable<any> {
    return this.getSesions().pipe(
      map(sesiones => sesiones.filter((sesion: { paciente: string }) => sesion.paciente === id))
    );
  }

  getSesionByProfesionalId(id: string): Observable<any> {
    return this.getSesions().pipe(
      map(sesiones => sesiones.filter((sesion: { profesional: string }) => sesion.profesional === id))
    );
  }


  //Aqui funciones que funcionen cuando no este la base de datos
  getSesionById(id: String): Observable<any> {
    const url = `${this.apiUrl}/sesiones/${id}`;
    return this.http.get<any>(url);
  }

}
