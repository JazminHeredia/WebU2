import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertaComponent } from './alerta/alerta.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaColoresComponent } from './lista-colores/lista-colores.component';

@NgModule({
  declarations: [
    AppComponent,
    // AlertaComponent removed from declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    AlertaComponent, // Import standalone component
    ListaColoresComponent, // Import standalone component
    ListaProductosComponent // Import standalone component
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Allow custom elements
})
export class AppModule { }
