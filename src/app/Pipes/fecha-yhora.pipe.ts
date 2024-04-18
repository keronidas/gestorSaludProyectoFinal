import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaYHora'
})
export class FechaYHoraPipe implements PipeTransform {

  transform(value: Date): string {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Se suma 1 porque los meses en JavaScript van de 0 a 11
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Formato de salida: dd/mm/aaaa hh:mm
    return `${this.padZero(day)}/${this.padZero(month)}/${year} ${this.padZero(hours)}:${this.padZero(minutes)}`;
  }

  // Función auxiliar para agregar ceros a la izquierda si el número es menor que 10
  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
