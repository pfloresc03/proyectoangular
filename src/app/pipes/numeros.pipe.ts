import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeros'
})
export class NumerosPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (args[0]=="cuadrado"){
      return value*value;
    } else if (args[0]=="raiz"){
      return Math.sqrt(value)
    } else if ((args[0]=="aletras")&&(value<10)){

    } else return null
      
  }

}
