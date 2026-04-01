import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  activeCategory = 'all';

  categories = ['all', 'mobile', 'web', 'backend', 'tools'];

  skills: Skill[] = [
    // Mobile
    { name: 'Flutter', level: 92, category: 'mobile', icon: '🦋' },
    { name: 'Dart', level: 90, category: 'mobile', icon: '🎯' },
    { name: 'Android', level: 75, category: 'mobile', icon: '🤖' },
    { name: 'Firebase', level: 85, category: 'mobile', icon: '🔥' },

    // Web
    { name: 'Angular', level: 88, category: 'web', icon: '🅰️' },
    { name: 'TypeScript', level: 85, category: 'web', icon: '📘' },
    { name: 'HTML/CSS', level: 90, category: 'web', icon: '🎨' },
    { name: 'RxJS', level: 78, category: 'web', icon: '🔄' },

    // Backend
    { name: 'FastAPI', level: 80, category: 'backend', icon: '⚡' },
    { name: 'Python', level: 82, category: 'backend', icon: '🐍' },
    { name: 'Supabase', level: 76, category: 'backend', icon: '🟢' },
    { name: 'REST API', level: 88, category: 'backend', icon: '🔌' },

    // Tools
    { name: 'Docker', level: 70, category: 'tools', icon: '🐳' },
    { name: 'Git', level: 88, category: 'tools', icon: '🌿' },
    { name: 'Remotion', level: 72, category: 'tools', icon: '🎬' },
    { name: 'Claude AI', level: 95, category: 'tools', icon: '🤖' },
  ];

  get filtered(): Skill[] {
    return this.activeCategory === 'all'
      ? this.skills
      : this.skills.filter(s => s.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  ngAfterViewInit() {}
}
