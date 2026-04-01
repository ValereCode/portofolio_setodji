import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  menuOpen = false;

  links = [
    { label: 'À propos', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  ngOnInit() {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 60;
  }

  scrollTo(href: string) {
    this.menuOpen = false;
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
