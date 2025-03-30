import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerta',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Ensure CommonModule is imported
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent {
  @Input() mensaje: string = '';
  @Input() tipo: string = 'success'; // Default type
}
