import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { ProvedoresComponent } from './provedores/provedores.component';
import { ColoresComponent } from './colores/colores.component';
import { VideosComponent } from './videos/videos.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { IvaPipe } from './pipes/iva.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProductosComponent,
    VentasComponent,
    ProvedoresComponent,
    ColoresComponent,
    VideosComponent,
    EmpleadoComponent,
    PlantillasComponent,
    ConversorPipe,
    IvaPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
