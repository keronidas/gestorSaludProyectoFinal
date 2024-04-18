import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) return '';
     // Si el valor es una fecha válida en formato 'aaaa-mm-ddThh:mm:ss.sss+hh:mm'
     if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}\+\d{2}:\d{2}$/.test(value)) {
      // Eliminar los milisegundos para que la función DatePipe pueda manejar la fecha correctamente
      value = value.substring(0, value.length - 6); // Eliminar los últimos 6 caracteres (los milisegundos y la zona horaria)
      
      const datePipe: DatePipe = new DatePipe('en-US');
      value = datePipe.transform(value, 'dd/MM/yyyy'); // Cambia el formato aquí según lo necesites
    }
    return value;
  }
}