import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  apiUrl: string = 'http://localhost:8078/api';

  constructor(private http: HttpClient) { }


  //Aqui funciones con base de datos

  //Obtener todos los usuarios
  getFactura(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/facturas`);
  }

  getGacturaByPatientId(id: string): Observable<any> {
    return this.getFactura().pipe(
      map(facturas => facturas.filter((factura: { patientId: string }) => factura.patientId === id))
    );
  }
  addFactura(patient: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/facturas`, patient);
  }

  //Aqui funciones que funcionen cuando no este la base de datos
  getFacturaId(id: String): Observable<any> {
    const url = `${this.apiUrl}/facturas/${id}`;
    return this.http.get<any>(url);
  }

}
