import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  apiUrl: string = 'http://localhost:8078/api';

  constructor(private http: HttpClient) { }


  //Aqui funciones con base de datos

  //Obtener todos los usuarios
  getPatients(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/pacientes`);
  }

  addPatient(patient: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/pacientes`, patient);
  }
  
  //Aqui funciones que funcionen cuando no este la base de datos
  getPatientById(id: String): Observable<any> {
    const url = `${this.apiUrl}/pacientes/${id}`;
    return this.http.get<any>(url);
  }
  deltePatientById(id: String): Observable<any> {
    const url = `${this.apiUrl}/pacientes/${id}`;
    return this.http.delete<any>(url);
  }
  
}
