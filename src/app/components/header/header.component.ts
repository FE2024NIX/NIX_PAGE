import { Component, OnInit } from '@angular/core';

import { gsap } from 'gsap';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.animateDescription();
  }

  animateDescription(): void {
    const button = document.querySelectorAll('.header_btn');
    const description = document.querySelectorAll('.description');
    const menuItems = document.querySelector('.menu-items');
    const logo = document.querySelector('.navbar_logo');

    if (menuItems) {
      gsap.from(menuItems.children, {
        opacity: 0,
        x: 0,
        duration: 1,
        delay: 0.5,
        stagger: {
          amount: 1,
        },
      });
    } else {
      console.error('No se encontró el elemento con la clase .menu-item');
    }

    gsap.set(logo, { opacity: 0 });
    gsap.set(description, { opacity: 0, y: 20 });
    gsap.set(button, { opacity: 0 });

    gsap.to(logo, { opacity: 1, duration: 1, delay: 0.5 });
    gsap.to(description, { opacity: 1, y: 0, duration: 1, delay: 0 });
    gsap.to(button, { opacity: 1, duration: 1, delay: 0.5 });
  }
}
