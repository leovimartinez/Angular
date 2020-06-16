import {Component} from '@angular/core';

@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html'
})

export class PlantillasComponent{
    titulo = 'Plantillas'
    public administrador;
    public fecha;
    public nombre;
    public ganancias:Array<number>;

    constructor(){
        this.administrador = true;
        this.fecha = new Date(2019,4,11);
        this.nombre = 'LEOVI';
        this.ganancias = [1000,200000,50000]
    }

    cambiarRol(valor){
        this.administrador = valor;
    }
}