import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aEuros'
})
export class MonedaPipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || value === undefined) {
      return '';
    }

    const formattedValue = value.toFixed(2);
    return formattedValue + ' €'; // Agrega el símbolo del euro al final
  }

}