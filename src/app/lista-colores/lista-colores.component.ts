import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-colores',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Ensure CommonModule is imported
  templateUrl: './lista-colores.component.html',
  styleUrls: ['./lista-colores.component.css']
})
export class ListaColoresComponent {
  colores: string[] = ['Red', 'Green', 'Blue', 'Yellow', 'Purple']; // Array of colors
  @Output() colorSeleccionado: EventEmitter<string> = new EventEmitter<string>(); // Emit selected color

  seleccionarColor(color: string): void {
    this.colorSeleccionado.emit(color); // Emit the selected color
  }
}
