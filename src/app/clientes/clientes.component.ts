import {Component} from '@angular/core';

@Component({
    selector: 'clientes',
    templateUrl: './clientes.component.html'
})

export class ClientesComponent{
    titulo = 'Clientes'

    public nombre_clientes:Array<any> = ['Bancomer','Banamex','Inbursa','Banorte'];
    edad = 45;
    public nombre: string = "";

    constructor(){
        console.log(this.nombre_clientes);
        console.log(this.titulo);
        this.nombre = "Martin";
        
    }

    ngOnInit(){
        console.log('Soy el Init de Angular');
        console.log(this.nombre_clientes);
        //console.log(this.nombre = "Leovi");
        this.cambiarNombre();
        console.log(this.nombre);
        this.cambiarEdad(59);
        console.log(this.edad);

        var uno = 9;
        var dos = 15;

        console.log(" Valor de var uno " + uno);
        console.log(dos);


        if(uno = 9){
            let uno = 19;
            console.log("Dentro del if con let " + uno);
        }
        console.log("Fuera del if " + uno);
    }

    cambiarNombre(){
        this.nombre = "Leovi";
    }

    cambiarEdad(edad){
        this.edad = edad;
    }
}