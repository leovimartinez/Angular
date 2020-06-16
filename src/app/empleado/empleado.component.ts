import { Component } from '@angular/core';
import { EmpleadoService } from '../services/peticiones.service';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html',
    providers: [EmpleadoService]
})

export class EmpleadoComponent{
    public titulo = 'Hola';
    public empleado:Empleado;
    public empleados:Array<Empleado>;
    public empleado_guardar;
    public empleadosAMostrar;
    public info;


    constructor(
        private empleadoService: EmpleadoService
    ){}

    ngOnInit(){
        console.log(this.empleadoService.prueba('Funciona mi prueba'));
        this.empleados = this.empleadoService.obtenerEmpleados();
        console.log(this.empleados);
        this.empleadosAMostrar = this.empleadoService.getEmpleados();
        this.empleadoService.obternerInfoServiceRest().subscribe(
            result => {
                this.info = result;
            },
            error =>{
                var err = <any>error;
                console.log(error);
            }
        );
    }

    empleadoGuardar(){
        this.empleadoService.agregarEmpleado(this.empleado_guardar);
        console.log(this.empleado_guardar);
    }

    empleadoEliminar(indice){
        console.log(indice);
        
        this.empleadoService.eliminarEmpleado(indice)
    }
}