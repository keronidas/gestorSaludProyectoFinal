import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalasTratamientoService {

  apiUrl: string = 'http://localhost:8078/api';

  constructor(private http: HttpClient) { }


  //Aqui funciones con base de datos

  //Obtener todos los usuarios
  getSalas(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/salas-tratamiento`);
  }

  addSala(patient: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/salas-tratamiento`, patient);
  }

  //Aqui funciones que funcionen cuando no este la base de datos
  getSalaById(id: String): Observable<any> {
    const url = `${this.apiUrl}/salas-tratamiento/${id}`;
    return this.http.get<any>(url);
  }
  deleteSala(id: String): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/salas-tratamiento/${id}`);
  }

}