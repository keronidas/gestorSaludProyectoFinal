import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  apiUrl: string = 'http://localhost:8078/api';

  constructor(private http: HttpClient) { }


  //Aqui funciones con base de datos

  //Obtener todos los usuarios
  getMaterial(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/material`);
  }

  addPatient(patient: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/material`, patient);
  }

  //Aqui funciones que funcionen cuando no este la base de datos
  getPatientById(id: String): Observable<any> {
    const url = `${this.apiUrl}/material/${id}`;
    return this.http.get<any>(url);
  }

}