import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ClientesComponent } from './clientes/clientes.component';
import { ColoresComponent } from './colores/colores.component';
import { VideosComponent } from './videos/videos.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const appRoutes: Routes =[
    {path: '', component:ClientesComponent},
    {path: 'clientes', component:ClientesComponent},//miapp.com/clientes
    {path: 'colores', component:ColoresComponent},//miapp.com/colores
    {path: 'videos', component:VideosComponent},
    {path: 'empleado', component:EmpleadoComponent},
    {path: 'plantillas', component:PlantillasComponent},

    {path: '**', component:ClientesComponent},//miapp.com/clientes
];


export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);