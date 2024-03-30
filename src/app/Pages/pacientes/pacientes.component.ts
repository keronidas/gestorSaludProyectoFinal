import { Component } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.scss'
})
export class PacientesComponent {

  items = [
    { id: 1, name: 'Item 1', email: 'item1@example.com', birthdate: '1990-01-01', city: 'Ciudad 1', number: '1234567890' },
    { id: 2, name: 'Item 2', email: 'item2@example.com', birthdate: '1995-05-05', city: 'Ciudad 2', number: '0987654321' },
    { id: 3, name: 'Item 3', email: 'item3@example.com', birthdate: '1988-12-10', city: 'Ciudad 3', number: '1357902468' },
    { id: 4, name: 'Item 4', email: 'item4@example.com', birthdate: '1976-07-20', city: 'Ciudad 4', number: '9876543210' },
    { id: 5, name: 'Item 5', email: 'item5@example.com', birthdate: '2000-11-15', city: 'Ciudad 5', number: '2468013579' },
    { id: 6, name: 'Item 6', email: 'item6@example.com', birthdate: '1999-03-25', city: 'Ciudad 6', number: '1029384756' },
    { id: 7, name: 'Item 7', email: 'item7@example.com', birthdate: '1992-09-30', city: 'Ciudad 7', number: '5678901234' },
    { id: 8, name: 'Item 8', email: 'item8@example.com', birthdate: '1985-04-18', city: 'Ciudad 8', number: '9876543210' },
    { id: 9, name: 'Item 9', email: 'item9@example.com', birthdate: '1997-08-02', city: 'Ciudad 9', number: '1234567890' },
    { id: 10, name: 'Item 10', email: 'item10@example.com', birthdate: '1980-06-05', city: 'Ciudad 10', number: '2468013579' },
    { id: 11, name: 'Item 11', email: 'item11@example.com', birthdate: '1993-02-14', city: 'Ciudad 11', number: '1029384756' },
    { id: 12, name: 'Item 12', email: 'item12@example.com', birthdate: '1996-10-22', city: 'Ciudad 12', number: '5678901234' },
    { id: 13, name: 'Item 13', email: 'item13@example.com', birthdate: '1986-03-03', city: 'Ciudad 13', number: '9876543210' },
    { id: 14, name: 'Item 14', email: 'item14@example.com', birthdate: '1998-07-09', city: 'Ciudad 14', number: '1234567890' },
    { id: 15, name: 'Item 15', email: 'item15@example.com', birthdate: '1982-11-28', city: 'Ciudad 15', number: '2468013579' },
    { id: 16, name: 'Item 16', email: 'item16@example.com', birthdate: '1994-06-17', city: 'Ciudad 16', number: '1029384756' },
    { id: 17, name: 'Item 17', email: 'item17@example.com', birthdate: '1991-01-07', city: 'Ciudad 17', number: '5678901234' },
    { id: 18, name: 'Item 18', email: 'item18@example.com', birthdate: '1989-05-12', city: 'Ciudad 18', number: '9876543210' },
    { id: 19, name: 'Item 19', email: 'item19@example.com', birthdate: '1990-08-30', city: 'Ciudad 19', number: '1234567890' },
    { id: 20, name: 'Item 20', email: 'item20@example.com', birthdate: '1995-04-02', city: 'Ciudad 20', number: '2468013579' },
    { id: 21, name: 'Item 21', email: 'item21@example.com', birthdate: '1987-12-17', city: 'Ciudad 21', number: '1029384756' },
    { id: 22, name: 'Item 22', email: 'item22@example.com', birthdate: '2001-09-25', city: 'Ciudad 22', number: '5678901234' },
    { id: 23, name: 'Item 23', email: 'item23@example.com', birthdate: '1993-02-06', city: 'Ciudad 23', number: '9876543210' },
    { id: 24, name: 'Item 24', email: 'item24@example.com', birthdate: '1996-07-14', city: 'Ciudad 24', number: '1234567890' },
    { id: 25, name: 'Item 25', email: 'item25@example.com', birthdate: '1983-10-18', city: 'Ciudad 25', number: '2468013579' },
    { id: 26, name: 'Item 26', email: 'item26@example.com', birthdate: '1997-03-22', city: 'Ciudad 26', number: '1029384756' },
    { id: 27, name: 'Item 27', email: 'item27@example.com', birthdate: '1981-08-09', city: 'Ciudad 27', number: '5678901234' },
    { id: 28, name: 'Item 28', email: 'item28@example.com', birthdate: '1994-01-31', city: 'Ciudad 28', number: '9876543210' },
    { id: 29, name: 'Item 29', email: 'item29@example.com', birthdate: '1998-06-04', city: 'Ciudad 29', number: '1234567890' },
    { id: 30, name: 'Item 30', email: 'item30@example.com', birthdate: '1984-04-27', city: 'Ciudad 30', number: '2468013579' },
    { id: 31, name: 'Item 31', email: 'item31@example.com', birthdate: '1992-11-14', city: 'Ciudad 31', number: '1029384756' },
    { id: 32, name: 'Item 32', email: 'item32@example.com', birthdate: '1995-10-23', city: 'Ciudad 32', number: '5678901234' },
    { id: 33, name: 'Item 33', email: 'item33@example.com', birthdate: '1988-05-01', city: 'Ciudad 33', number: '9876543210' },
    { id: 34, name: 'Item 34', email: 'item34@example.com', birthdate: '1999-02-12', city: 'Ciudad 34', number: '1234567890' },
    { id: 35, name: 'Item 35', email: 'item35@example.com', birthdate: '1986-07-21', city: 'Ciudad 35', number: '2468013579' },
    { id: 36, name: 'Item 36', email: 'item36@example.com', birthdate: '1997-11-03', city: 'Ciudad 36', number: '1029384756' },
    { id: 37, name: 'Item 37', email: 'item37@example.com', birthdate: '1994-09-15', city: 'Ciudad 37', number: '5678901234' },
    { id: 38, name: 'Item 38', email: 'item38@example.com', birthdate: '1991-03-28', city: 'Ciudad 38', number: '9876543210' },
    { id: 39, name: 'Item 39', email: 'item39@example.com', birthdate: '1989-12-11', city: 'Ciudad 39', number: '1234567890' },
    { id: 40, name: 'Item 40', email: 'item40@example.com', birthdate: '1990-06-26', city: 'Ciudad 40', number: '2468013579' },
    { id: 41, name: 'Item 41', email: 'item41@example.com', birthdate: '1995-01-20', city: 'Ciudad 41', number: '1029384756' },
    { id: 42, name: 'Item 42', email: 'item42@example.com', birthdate: '1987-08-07', city: 'Ciudad 42', number: '5678901234' },
    { id: 43, name: 'Item 43', email: 'item43@example.com', birthdate: '2000-04-29', city: 'Ciudad 43', number: '9876543210' },
    { id: 44, name: 'Item 44', email: 'item44@example.com', birthdate: '1993-11-16', city: 'Ciudad 44', number: '1234567890' },
    { id: 45, name: 'Item 45', email: 'item45@example.com', birthdate: '1982-02-03', city: 'Ciudad 45', number: '2468013579' },
    { id: 46, name: 'Item 46', email: 'item46@example.com', birthdate: '1998-10-07', city: 'Ciudad 46', number: '1029384756' },
    { id: 47, name: 'Item 47', email: 'item47@example.com', birthdate: '1984-05-26', city: 'Ciudad 47', number: '5678901234' },
    { id: 48, name: 'Item 48', email: 'item48@example.com', birthdate: '1997-01-09', city: 'Ciudad 48', number: '9876543210' },
    { id: 49, name: 'Item 49', email: 'item49@example.com', birthdate: '1994-07-27', city: 'Ciudad 49', number: '1234567890' },
    { id: 50, name: 'Item 50', email: 'item50@example.com', birthdate: '1981-06-10', city: 'Ciudad 50', number: '2468013579' },
    { id: 51, name: 'Item 51', email: 'item51@example.com', birthdate: '1992-03-05', city: 'Ciudad 51', number: '1029384756' },
    { id: 52, name: 'Item 52', email: 'item52@example.com', birthdate: '1988-09-18', city: 'Ciudad 52', number: '5678901234' },
    { id: 53, name: 'Item 53', email: 'item53@example.com', birthdate: '2001-05-24', city: 'Ciudad 53', number: '9876543210' },
    { id: 54, name: 'Item 54', email: 'item54@example.com', birthdate: '1993-12-07', city: 'Ciudad 54', number: '1234567890' },
    { id: 55, name: 'Item 55', email: 'item55@example.com', birthdate: '1982-08-16', city: 'Ciudad 55', number: '2468013579' },
    { id: 56, name: 'Item 56', email: 'item56@example.com', birthdate: '1998-02-19', city: 'Ciudad 56', number: '1029384756' },
    { id: 57, name: 'Item 57', email: 'item57@example.com', birthdate: '1984-09-30', city: 'Ciudad 57', number: '5678901234' },
    { id: 58, name: 'Item 58', email: 'item58@example.com', birthdate: '1997-04-13', city: 'Ciudad 58', number: '9876543210' },
    { id: 59, name: 'Item 59', email: 'item59@example.com', birthdate: '1994-08-08', city: 'Ciudad 59', number: '1234567890' },
    { id: 60, name: 'Item 60', email: 'item60@example.com', birthdate: '1981-03-14', city: 'Ciudad 60', number: '2468013579' },
    // Agrega más elementos según tus necesidades
  ];


  // Variables para la paginación
  currentPage = 1;
  itemsPerPage = 20;
  itemsPerPageOptions = [5, 10, 25, 50, 100, 1000];

  // Método para calcular el número total de páginas
  get totalPages(): number[] {
    const totalPagesCount = Math.ceil(this.items.length / this.itemsPerPage);
    return Array(totalPagesCount).fill(0).map((x, i) => i + 1);
  }

  // Método para obtener los elementos de la página actual
  get currentPageItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  // Método para cambiar la página actual
  setCurrentPage(page: number): void {
    this.currentPage = page;
  }
  onItemsPerPageChange(value: number): void {
    console.log('Items per page changed to: ', value);

    // Lógica para manejar el cambio de número de items por página
    // Puedes recalcular la página actual o ajustar la lógica de paginación según sea necesario
    this.currentPage = 1; // Resetear a la primera página cuando cambie el número de items por página
  }

}
