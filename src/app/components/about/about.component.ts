import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  visualItems = [
    { emoji: '💜', text: 'Derechos de la Mujer', class: 'bg-mudeco-purple-100' },
    { emoji: '🌸', text: 'Cuidado con Dignidad', class: 'bg-mudeco-pink-100' },
    { emoji: '🤝', text: 'Apoyo Comunitario', class: 'bg-mudeco-rose-100' },
    { emoji: '✊', text: 'Incidencia Política', class: 'bg-mudeco-warm-100' },
  ];
}
