import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  tagline: string;
  desc: string;
  tags: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
  emoji: string;
  color: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'TrOXLabs Mobile',
      tagline: 'Plateforme e-learning mobile',
      desc: 'Application mobile Flutter pour TrOXLabs — plateforme e-learning avec vidéos, documents, mentorship et offres de stages, bourses et emplois.',
      tags: ['Flutter', 'Dart', 'Firebase', 'E-learning'],
      emoji: '🎓',
      link: 'https://play.google.com/store/apps/details?id=com.troxlabs.tmobile&hl=fr',
      featured: true,
      color: 'orange'
    },
    {
      title: 'TrOXLabs Web',
      tagline: 'Plateforme e-learning web',
      desc: 'Plateforme web Angular pour TrOXLabs — e-learning avec vidéos, documents, mentorship et offres de stages, bourses et emplois. Tableau de bord admin et intégration API.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'E-learning'],
      emoji: '🎓',
      link: 'https://web.troxlabs.com/',
      featured: true,
      color: 'gold'
    },
    {
      title: 'VAULTDL',
      tagline: 'YouTube Downloader Full-Stack',
      desc: 'Application web complète de téléchargement YouTube avec file d\'attente, WebSocket temps réel et interface Angular moderne. Backend FastAPI + Celery + Redis + Docker.',
      tags: ['FastAPI', 'Angular 17', 'Celery', 'Redis', 'Docker'],
      link: '#',
      emoji: '🎬',
      color: 'cyan'
    },
    {
      title: 'MedData Analyzer',
      tagline: 'Analyse de données médicales',
      desc: 'Scripts Python/openpyxl avancés pour le traitement et la classification de données chirurgicales et pathologiques depuis Excel. Génération automatique de rapports formatés.',
      tags: ['Python', 'openpyxl', 'Google Colab', 'Pandas'],
      emoji: '🔬',
      color: 'gold'
    },
    {
      title: 'Status Saver',
      tagline: 'Sauvegarde de statuts WhatsApp',
      desc: 'Application Flutter permettant de visualiser et sauvegarder les statuts WhatsApp (images et vidéos) avec une interface intuitive, gestion des permissions et galerie intégrée.',
      tags: ['Flutter', 'Dart', 'Android', 'Storage API'],
      link: 'https://status-saver-ae992.web.app/',
      repo: 'https://github.com/ValereCode/status_saver',
      emoji: '💾',
      color: 'cyan'
    },
    {
      title: 'Portfolio IA',
      tagline: 'Ce portfolio — conçu avec Claude',
      desc: 'Portfolio hors du commun avec canvas particles, animations cinématographiques, curseur custom et design system cohérent. Angular 17 standalone components.',
      tags: ['Angular 17', 'SCSS', 'Canvas API', 'Claude AI'],
      link: '#',
      emoji: '⚡',
      color: 'gold'
    }

  ];

  hoveredIdx: number | null = null;
}
