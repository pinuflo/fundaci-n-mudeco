import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Value {
  emoji: string;
  title: string;
  description: string;
  bgClass: string;
}

@Component({
    selector: 'app-mission',
    imports: [CommonModule, ScrollRevealDirective],
    templateUrl: './mission.component.html',
    styleUrl: './mission.component.scss'
})
export class MissionComponent {
  values: Value[] = [
    {
      emoji: '🌿',
      title: 'Dignidad',
      description: 'Cada mujer cuidadora merece ser tratada con respeto y reconocimiento por su invaluable labor.',
      bgClass: 'bg-mudeco-sage-50',
    },
    {
      emoji: '⚖️',
      title: 'Equidad de Género',
      description: 'Trabajamos para eliminar las desigualdades que recaen sobre las mujeres en el ámbito del cuidado.',
      bgClass: 'bg-mudeco-clay-50',
    },
    {
      emoji: '🤝',
      title: 'Solidaridad',
      description: 'Nos apoyamos mutuamente, construyendo redes de contención y acompañamiento entre cuidadoras.',
      bgClass: 'bg-mudeco-earth-50',
    },
    {
      emoji: '📢',
      title: 'Incidencia',
      description: 'Impulsamos cambios en políticas públicas para que el Estado reconozca y proteja el trabajo de cuidado.',
      bgClass: 'bg-mudeco-cream-200',
    },
    {
      emoji: '🌱',
      title: 'Autonomía',
      description: 'Fomentamos el desarrollo personal y la independencia de las mujeres cuidadoras, más allá del rol de cuidado.',
      bgClass: 'bg-mudeco-sage-50',
    },
    {
      emoji: '🤲',
      title: 'Autocuidado',
      description: 'Promovemos el bienestar físico y emocional de quienes cuidan, recordando que también necesitan cuidado.',
      bgClass: 'bg-mudeco-clay-50',
    },
  ];
}
