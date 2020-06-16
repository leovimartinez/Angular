import { Injectable } from '@angular/core';
import { Empleado } from '../empleado/empleado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { ApiService } from '../api.service';


@Injectable()
export class EmpleadoService{
    public nombre_empleado;
    public empleado:Empleado;
    public empleados:Array<Empleado>;
    public empleadosList = ['Oscar','Jaime'];
    public indice;

    public url:string;

    constructor(private _http:HttpClient){
        this.url = "http://jsonplaceholder.typicode.com/posts";
    }

    obternerInfoServiceRest(){
        return this._http.get(this.url);
    }

    prueba(nombre_empleado){
        return nombre_empleado
    }
    

    obtenerEmpleados(){
        this.empleados = [ 
            
            new Empleado ('Leovi', 35, 'CEO'),
            new Empleado ('Erick', 32, 'SM'),
            new Empleado ('Ricardo', 45, 'DM')
        ];

        return this.empleados;
    }

    agregarEmpleado(nombre_empleado){
        this.empleadosList.push(nombre_empleado);
        console.log(this.empleadosList);
        

    }

    getEmpleados(){
        return this.empleadosList;
    }

    eliminarEmpleado(indice){
        console.log(indice);
        
        this.empleadosList.splice(indice,1);



    }
}