import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  region: string;
  asunto: string;
  mensaje: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitted = false;

  formData: FormData = {
    nombre: '',
    apellido: '',
    email: '',
    region: '',
    asunto: '',
    mensaje: '',
  };

  regions = [
    'Región de Arica y Parinacota',
    'Región de Tarapacá',
    'Región de Antofagasta',
    'Región de Atacama',
    'Región de Coquimbo',
    'Región de Valparaíso',
    'Región Metropolitana de Santiago',
    "Región del Libertador Gral. Bernardo O'Higgins",
    'Región del Maule',
    'Región del Ñuble',
    'Región del Biobío',
    'Región de La Araucanía',
    'Región de Los Ríos',
    'Región de Los Lagos',
    'Región Aysén del Gral. Carlos Ibáñez del Campo',
    'Región de Magallanes y la Antártica Chilena',
  ];

  contactInfo = [
    {
      icon: '📍',
      label: 'Dirección',
      value: 'Av. Providencia 1234, Of. 501, Santiago, Chile',
      bgClass: 'bg-mudeco-purple-100',
    },
    {
      icon: '📧',
      label: 'Correo electrónico',
      value: 'contacto@fundacionmudeco.cl',
      bgClass: 'bg-mudeco-pink-100',
    },
    {
      icon: '📞',
      label: 'Teléfono',
      value: '+56 2 2345 6789',
      bgClass: 'bg-mudeco-rose-100',
    },
    {
      icon: '📱',
      label: 'WhatsApp',
      value: '+56 9 8765 4321',
      bgClass: 'bg-mudeco-warm-100',
    },
  ];

  socialLinks = [
    { icon: '📘', label: 'Facebook',  href: '#', bgClass: 'bg-blue-600' },
    { icon: '📸', label: 'Instagram', href: '#', bgClass: 'bg-gradient-to-br from-mudeco-pink-500 to-mudeco-purple-600' },
    { icon: '🐦', label: 'Twitter/X', href: '#', bgClass: 'bg-gray-800' },
    { icon: '💼', label: 'LinkedIn',  href: '#', bgClass: 'bg-blue-700' },
  ];

  onSubmit(): void {
    this.submitted = true;
    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.formData = { nombre: '', apellido: '', email: '', region: '', asunto: '', mensaje: '' };
    }, 3000);
  }
}
