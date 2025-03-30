import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenU2';
  colorSeleccionado: string = ''; // Almacena el color seleccionado

  manejarColorSeleccionado(color: string): void {
    this.colorSeleccionado = color; // Actualiza el color seleccionado
    console.log('Color seleccionado:', color);
  }
}
