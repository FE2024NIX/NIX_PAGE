import { Component, AfterViewInit } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const title = document.querySelector('.title');
    const aboutDescription = document.querySelector('.about_description');

    // Configuración para animación de titulo
    gsap.fromTo(
      title,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'bottom 80%',
        },
      }
    );

    // Configuración para animación de descipción

    gsap.fromTo(
      aboutDescription,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: aboutDescription,
        },
      }
    );
  }
}
