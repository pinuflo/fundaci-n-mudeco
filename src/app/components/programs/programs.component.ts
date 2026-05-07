import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Program {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  gradientClass: string;
  iconBgClass: string;
}

@Component({
    selector: 'app-programs',
    imports: [CommonModule],
    templateUrl: './programs.component.html',
    styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  programs: Program[] = [
    {
      icon: '📚',
      title: 'Formación y Capacitación',
      description: 'Talleres presenciales y virtuales sobre derechos laborales, salud mental y autocuidado para mujeres cuidadoras.',
      tags: ['Talleres', 'Online', 'Gratuito'],
      gradientClass: 'bg-gradient-to-r from-mudeco-purple-600 to-mudeco-pink-500',
      iconBgClass: 'bg-mudeco-purple-100',
    },
    {
      icon: '🧠',
      title: 'Apoyo Psicoemocional',
      description: 'Grupos de apoyo y sesiones de acompañamiento psicológico gratuitas para cuidadoras en todo el país.',
      tags: ['Salud Mental', 'Grupos', 'Apoyo'],
      gradientClass: 'bg-gradient-to-r from-mudeco-pink-500 to-mudeco-rose-500',
      iconBgClass: 'bg-mudeco-pink-100',
    },
    {
      icon: '⚖️',
      title: 'Asesoría Legal',
      description: 'Orientación jurídica sobre previsión social, seguridad laboral y derechos de las cuidadoras no remuneradas.',
      tags: ['Legal', 'Gratuito', 'Presencial'],
      gradientClass: 'bg-gradient-to-r from-mudeco-rose-500 to-mudeco-warm-200',
      iconBgClass: 'bg-mudeco-rose-100',
    },
    {
      icon: '🌐',
      title: 'Red Nacional de Cuidadoras',
      description: 'Conectamos a mujeres cuidadoras de todas las regiones del país para compartir experiencias y fortalecer el movimiento.',
      tags: ['Red', 'Comunidad', 'Nacional'],
      gradientClass: 'bg-gradient-to-r from-mudeco-purple-700 to-mudeco-purple-500',
      iconBgClass: 'bg-mudeco-purple-100',
    },
    {
      icon: '📣',
      title: 'Incidencia y Advocacy',
      description: 'Trabajamos con el Estado y el Congreso para impulsar leyes que reconozcan el trabajo de cuidado remunerado.',
      tags: ['Política Pública', 'Lobby', 'Legislación'],
      gradientClass: 'bg-gradient-to-r from-mudeco-pink-600 to-mudeco-purple-600',
      iconBgClass: 'bg-mudeco-pink-100',
    },
    {
      icon: '💰',
      title: 'Fondo de Emergencia',
      description: 'Apoyos económicos de emergencia para cuidadoras en situación crítica que no puedan acceder a servicios básicos.',
      tags: ['Emergencia', 'Ayuda', 'Subsidio'],
      gradientClass: 'bg-gradient-to-r from-mudeco-warm-200 to-mudeco-pink-400',
      iconBgClass: 'bg-mudeco-warm-100',
    },
  ];
}
