import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
    selector: 'app-about',
    imports: [CommonModule, ScrollRevealDirective],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
  visualItems = [
    { emoji: '🌿', text: 'Derechos de la Mujer',  class: 'bg-mudeco-sage-50' },
    { emoji: '🤲', text: 'Cuidado con Dignidad',   class: 'bg-mudeco-clay-50' },
    { emoji: '🤝', text: 'Apoyo Comunitario',       class: 'bg-mudeco-earth-50' },
    { emoji: '✊', text: 'Incidencia Política',     class: 'bg-mudeco-cream-200' },
  ];
}
