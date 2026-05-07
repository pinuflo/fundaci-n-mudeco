import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  region: string;
  asunto: string;
  mensaje: string;
}

const CONTACT_EMAIL = 'contacto@fundacionmudeco.cl';

const ASUNTO_LABELS: Record<string, string> = {
  unirse:      'Quiero unirme a MUDECO',
  programas:   'Información sobre programas',
  legal:       'Asesoría legal',
  psicologica: 'Apoyo psicoemocional',
  donacion:    'Quiero apoyar / donar',
  otro:        'Otro',
};

@Component({
    selector: 'app-contact',
    imports: [CommonModule, FormsModule, ScrollRevealDirective],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
  mailtoClicked = false;

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
      bgClass: 'bg-mudeco-clay-50',
    },
    {
      icon: '📧',
      label: 'Correo electrónico',
      value: 'contacto@fundacionmudeco.cl',
      bgClass: 'bg-mudeco-sage-50',
    },
    {
      icon: '📞',
      label: 'Teléfono',
      value: '+56 2 2345 6789',
      bgClass: 'bg-mudeco-earth-50',
    },
    {
      icon: '📱',
      label: 'WhatsApp',
      value: '+56 9 8765 4321',
      bgClass: 'bg-mudeco-cream-200',
    },
  ];

  socialLinks = [
    { label: 'Facebook',  href: '#', bgClass: 'bg-blue-600' },
    { label: 'Instagram', href: '#', bgClass: 'bg-gradient-to-br from-pink-500 to-purple-600' },
    { label: 'Twitter/X', href: '#', bgClass: 'bg-gray-800' },
    { label: 'LinkedIn',  href: '#', bgClass: 'bg-blue-700' },
  ];

  openMailto(): void {
    const { nombre, apellido, email, region, asunto, mensaje } = this.formData;
    const asuntoLabel = ASUNTO_LABELS[asunto] || asunto || 'Consulta general';

    const subject = encodeURIComponent(
      `[MUDECO] ${asuntoLabel} — ${nombre} ${apellido}`.trim()
    );
    const body = encodeURIComponent(
      `Nombre: ${nombre} ${apellido}\n` +
      `Correo de contacto: ${email}\n` +
      `Región: ${region || 'No indicada'}\n` +
      `Asunto: ${asuntoLabel}\n\n` +
      `Mensaje:\n${mensaje}`
    );

    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_self');
    this.mailtoClicked = true;
    setTimeout(() => { this.mailtoClicked = false; }, 4000);
  }
}
