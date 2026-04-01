import { Component, OnInit, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  cursorX = 0;
  cursorY = 0;
  ringX = 0;
  ringY = 0;
  isHover = false;
  animFrame!: number;

  private cursor!: HTMLElement;
  private ring!: HTMLElement;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.cursor = document.querySelector('.cursor') as HTMLElement;
    this.ring = document.querySelector('.cursor-ring') as HTMLElement;
    this.animateCursor();
    this.initRevealObserver();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;

    if (this.cursor) {
      this.cursor.style.left = `${e.clientX}px`;
      this.cursor.style.top = `${e.clientY}px`;
    }
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const isInteractive = target.closest('a, button, .btn-glow, .btn-solid, .project-card, .skill-item, nav a');
    this.isHover = !!isInteractive;

    if (this.cursor) this.cursor.classList.toggle('hover', this.isHover);
    if (this.ring) this.ring.classList.toggle('hover', this.isHover);
  }

  animateCursor() {
    this.ringX += (this.cursorX - this.ringX) * 0.15;
    this.ringY += (this.cursorY - this.ringY) * 0.15;

    if (this.ring) {
      this.ring.style.left = `${this.ringX}px`;
      this.ring.style.top = `${this.ringY}px`;
    }

    this.animFrame = requestAnimationFrame(() => this.animateCursor());
  }

  initRevealObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 300);
  }
}
