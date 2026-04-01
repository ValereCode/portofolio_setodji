import {
  Component, OnInit, AfterViewInit, ViewChild,
  ElementRef, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  displayedTitle = '';
  displayedRole = '';
  titleFull = 'SETODJI';
  roleFull = 'Développeur Mobile & Web';
  typingDone = false;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animId!: number;
  private resizeObs!: ResizeObserver;

  ngAfterViewInit() {
    this.initCanvas();
    this.typeTitle();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
    this.resizeObs?.disconnect();
  }

  typeTitle() {
    let i = 0;
    const typeChar = () => {
      if (i < this.titleFull.length) {
        this.displayedTitle = this.titleFull.slice(0, ++i);
        setTimeout(typeChar, 90);
      } else {
        setTimeout(() => this.typeRole(), 400);
      }
    };
    setTimeout(typeChar, 800);
  }

  typeRole() {
    let i = 0;
    const typeChar = () => {
      if (i < this.roleFull.length) {
        this.displayedRole = this.roleFull.slice(0, ++i);
        setTimeout(typeChar, 45);
      } else {
        this.typingDone = true;
      }
    };
    typeChar();
  }

  scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }

  initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize(canvas);

    this.resizeObs = new ResizeObserver(() => this.resize(canvas));
    this.resizeObs.observe(document.body);

    this.createParticles(canvas);
    this.animate(canvas);
  }

  resize(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  createParticles(canvas: HTMLCanvasElement) {
    this.particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 14000);
    for (let i = 0; i < count; i++) {
      this.particles.push(new Particle(canvas.width, canvas.height));
    }
  }

  animate(canvas: HTMLCanvasElement) {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of this.particles) {
      p.update(canvas.width, canvas.height);
      p.draw(this.ctx);
    }

    // Draw connections
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 229, 255, ${0.08 * (1 - dist / 140)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }

    this.animId = requestAnimationFrame(() => this.animate(canvas));
  }
}

class Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.size = Math.random() * 1.5 + 0.5;
    this.opacity = Math.random() * 0.6 + 0.2;
  }

  update(w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 229, 255, ${this.opacity})`;
    ctx.fill();
  }
}
