import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  heroStats = [
    { value: '+2.000', label: 'Mujeres apoyadas' },
    { value: '7',      label: 'Años de trayectoria' },
    { value: '15',     label: 'Regiones activas' },
  ];
}
