import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  apiUrl: string = 'https://localchost:3000';

  constructor(private http: HttpClient) { }


  //Aqui funciones con base de datos


  //Aqui funciones que funcionen cuando no este la base de datos
  obtenerUsuario(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
  getDatosImaginarios() {
    return this.items;
  }

  obtenerUsuarioById(id: number) {
    return this.items.find(item => item.id === id);
  }
  addDatosImaginarios(items: any) {
    items.id = this.items.length + 1;
    this.items.push(items);
  }


  //Aqui los datos imaginarios 
  items = [
    {
      id: 1, name: 'Ana Martínez Gómez', profesion: "Dentista", email: 'ana.martinez@example.com', birthdate: '1987-03-12', city: 'Madrid', number: '1234567890',
      img: '../assets/img/paciente1.jpeg'
    },
    { id: 2, name: 'María García Sánchez', profesion: "Policia", email: 'maria.garcia@example.com', birthdate: '1985-11-05', city: 'Valencia', number: '1357902468', img: '../assets/img/paciente2.jpeg' },
    { id: 3, name: 'Juan López Pérez', profesion: "Informatico", email: 'juan.lopez@example.com', birthdate: '1992-08-25', city: 'Barcelona', number: '0987654321', img: '../assets/img/paciente3.jpeg' },
    { id: 4, name: 'Pedro Rodríguez Fernández', profesion: "Arquitecto", email: 'pedro.rodriguez@example.com', birthdate: '1979-04-30', city: 'Sevilla', number: '9876543210', img: '../assets/img/paciente4.jpeg' },
    { id: 5, name: 'Laura Martínez Ruiz', profesion: "Fontanera", email: 'laura.martinez@example.com', birthdate: '1998-01-15', city: 'Bilbao', number: '2468013579', img: '../assets/img/paciente5.jpeg' }
  ];
}
