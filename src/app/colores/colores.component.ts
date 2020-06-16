import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
    selector: 'colores',
    templateUrl: './colores.component.html'
})

export class ColoresComponent{
    titulo = 'Colores'
    public color_seleccionado:string;
    public nombre: string = "";
    public clase_seleccionada:string;
    public color;
    public cliente:Cliente;
    public clientes:Array<Cliente>;
    public cambio:boolean;

    constructor(){
        this.color_seleccionado = '#ccc';
        console.log(this.color_seleccionado);
        this.clase_seleccionada = '';
        this.color = 'green';
        this.cliente = new Cliente('Leovi', 35, true);

        this.clientes = [
            new Cliente('Axel', 30, true),
            new Cliente('Carlos', 35, false),
            new Cliente('Erick', 32,true)
        ];

    }
    evento(valor){
        this.cambio = valor;
    }

    
}