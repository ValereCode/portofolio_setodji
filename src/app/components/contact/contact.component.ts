import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = { name: '', email: '', subject: '', message: '' };
  status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';

  socials = [
    { label: 'GitHub', url: 'https://github.com/ValereCode', icon: 'gh' },
    { label: 'LinkedIn', url: 'www.linkedin.com/in/valère-setodji-79767a255', icon: 'li' },
    { label: 'Twitter / X', url: 'https://x.com/data_sciences_', icon: 'tw' },
  ];

  async onSubmit() {
    this.status = 'sending';
    // Simulate API call — replace with real endpoint
    await new Promise(r => setTimeout(r, 1800));
    this.status = 'sent';
    this.form = { name: '', email: '', subject: '', message: '' };
  }

  resetForm() {
    this.status = 'idle';
  }
}
