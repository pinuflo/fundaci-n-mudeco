import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Inicio',        href: '#inicio' },
    { label: 'Quiénes Somos', href: '#quienes-somos' },
    { label: 'Misión',        href: '#mision' },
    { label: 'Programas',     href: '#programas' },
    { label: 'Impacto',       href: '#impacto' },
    { label: 'Contacto',      href: '#contacto' },
  ];

  programLinks = [
    'Formación y Capacitación',
    'Apoyo Psicoemocional',
    'Asesoría Legal',
    'Red Nacional',
    'Incidencia',
    'Fondo de Emergencia',
  ];

  socialLinks = [
    { icon: '📘', label: 'Facebook',  href: '#' },
    { icon: '📸', label: 'Instagram', href: '#' },
    { icon: '🐦', label: 'Twitter/X', href: '#' },
    { icon: '💼', label: 'LinkedIn',  href: '#' },
  ];
}
