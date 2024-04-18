import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {
  apiUrl: string = 'http://localhost:8078/api';

  constructor(private http: HttpClient) { }


  //Aqui funciones con base de datos

  //Obtener todos los usuarios
  getProfesionals(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/profesionales`);
  }

  addProfesional(patient: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/profesionales`, patient);
  }

  //Aqui funciones que funcionen cuando no este la base de datos
  getProfesionalById(id: String): Observable<any> {
    const url = `${this.apiUrl}/profesionales/${id}`;
    return this.http.get<any>(url);
  }

}