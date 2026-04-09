import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

// TODO: Replace these with your EmailJS credentials from https://www.emailjs.com/
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

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
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    this.form.name,
          from_email:   this.form.email,
          subject:      this.form.subject,
          message:      this.form.message,
          to_email:     'setodji2001@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      this.status = 'sent';
      this.form = { name: '', email: '', subject: '', message: '' };
    } catch {
      this.status = 'error';
    }
  }

  resetForm() {
    this.status = 'idle';
  }
}
