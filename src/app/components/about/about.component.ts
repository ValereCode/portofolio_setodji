import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  // Replace this URL with your actual photo path: 'assets/photo.jpg'
  photoUrl = 'assets/photo.jpg';

  traits = [
    { icon: '⚡', label: 'Passionné', desc: 'Le code est ma vocation, pas juste un métier' },
    { icon: '🎯', label: 'Orienté résultat', desc: 'Chaque projet livré avec soin et précision' },
    { icon: '🔄', label: 'Apprenant continu', desc: 'Toujours en quête des meilleures pratiques' },
    { icon: '🤝', label: 'Collaboratif', desc: 'J\'aime travailler en équipe et partager' },
  ];

  stack = ['Flutter', 'Angular', 'Firebase', 'FastAPI', 'Python', 'TypeScript', 'Docker', 'Supabase', 'Node.js', 'MongoDB'];
}
