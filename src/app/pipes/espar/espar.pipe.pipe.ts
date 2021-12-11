import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espar'
})
export class Espar implements PipeTransform {

  transform(value: any, args?: any): any {

    var espar = "No es par";

    if(value % 2 == 0){
      espar = "Es par";
    }

    return "El año: "+ value + " " + espar;
  }

}
