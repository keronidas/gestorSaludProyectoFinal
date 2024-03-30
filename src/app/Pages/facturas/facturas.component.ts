import { Component } from '@angular/core';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.scss'
})
export class FacturasComponent {
  items: any[] = [];

  constructor() {
    for (let i = 1; i <= 1000; i++) {
      this.items.push({
        nombre: `Item ${i}`,
        codigoVerificacion: Math.random().toString(36).substring(7), // Código aleatorio de 7 caracteres
        fechaCreacion: new Date().toDateString(), // Fecha de creación actual,
        fechaFacturacion: new Date().toDateString(), // Fecha de facturación actual
        estado: Math.random() > 0.05 ? 'Pagado' : 'Pendiente', // Estado aleatorio entre 'Pagado' y 'Pendiente'
        descuento_general: (Math.random() * 30).toFixed(2), // Descuento aleatorio entre 0 y 100
        importe: (Math.random() * 1000).toFixed(2), // Importe aleatorio entre 0 y 1000
      });
    }
  }


  // Variables para la paginación
  currentPage = 1;
  itemsPerPage = 100;
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


