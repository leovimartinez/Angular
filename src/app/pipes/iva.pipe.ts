import {Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'iva'})
export class IvaPipe implements PipeTransform{

    transform(ganancia){
        let value_one = parseInt(ganancia);
        
        let resultado = "El iva de la ganancia es" + value_one + "X" + "0.16" + "=" +(value_one * 0.16);
        return resultado;
    }
}