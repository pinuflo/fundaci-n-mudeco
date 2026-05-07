import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
    selector: 'app-impact',
    imports: [CommonModule, ScrollRevealDirective],
    templateUrl: './impact.component.html',
    styleUrl: './impact.component.scss'
})
export class ImpactComponent {
  stats = [
    {
      value: '+2.400',
      label: 'Mujeres apoyadas',
      sublabel: 'Desde 2018',
      colorClass: 'text-mudeco-clay-600',
      gradientClass: 'bg-gradient-to-r from-mudeco-clay-500 to-mudeco-earth-400',
    },
    {
      value: '15',
      label: 'Regiones activas',
      sublabel: 'Todo Chile',
      colorClass: 'text-mudeco-sage-600',
      gradientClass: 'bg-gradient-to-r from-mudeco-sage-500 to-mudeco-sage-400',
    },
    {
      value: '48',
      label: 'Talleres realizados',
      sublabel: 'En 2024',
      colorClass: 'text-mudeco-clay-600',
      gradientClass: 'bg-gradient-to-r from-mudeco-clay-600 to-mudeco-clay-400',
    },
    {
      value: '3',
      label: 'Leyes impulsadas',
      sublabel: 'En el Congreso',
      colorClass: 'text-mudeco-earth-600',
      gradientClass: 'bg-gradient-to-r from-mudeco-earth-500 to-mudeco-clay-300',
    },
  ];

  testimonials = [
    {
      quote: 'Gracias a MUDECO encontré una red de mujeres que entienden lo que vivo. Los talleres me ayudaron a entender mis derechos y a cuidarme a mí misma también.',
      name: 'María González',
      location: 'Santiago, RM',
      initials: 'MG',
      avatarClass: 'bg-gradient-to-br from-mudeco-clay-600 to-mudeco-earth-500',
    },
    {
      quote: 'Cuido a mi madre hace 10 años y siempre me sentí sola. En MUDECO descubrí que no estoy sola y que hay muchas mujeres que luchan por un cambio real.',
      name: 'Rosa Fuentes',
      location: 'Valparaíso, V Región',
      initials: 'RF',
      avatarClass: 'bg-gradient-to-br from-mudeco-sage-600 to-mudeco-sage-400',
    },
    {
      quote: 'La asesoría legal que me dieron fue fundamental. No sabía que tenía derechos previsionales como cuidadora. Esta fundación hace una diferencia enorme.',
      name: 'Carmen López',
      location: 'Concepción, VIII Región',
      initials: 'CL',
      avatarClass: 'bg-gradient-to-br from-mudeco-clay-700 to-mudeco-clay-500',
    },
  ];
}
