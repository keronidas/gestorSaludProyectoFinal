import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) return '';
    // Si el valor es una fecha válida en formato 'aaaa-mm-dd'
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      const datePipe: DatePipe = new DatePipe('en-US');
      value = datePipe.transform(value, 'dd/MM/yyyy'); // Cambia el formato aquí según lo necesites
    }
    return value;
  }

}
