import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  href: string;
}

@Component({
    selector: 'app-navbar',
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen = false;

  navLinks: NavLink[] = [
    { label: 'Inicio',    href: '#inicio' },
    { label: 'Quiénes Somos', href: '#quienes-somos' },
    { label: 'Misión',    href: '#mision' },
    { label: 'Programas', href: '#programas' },
    { label: 'Impacto',   href: '#impacto' },
    { label: 'Contacto',  href: '#contacto' },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
