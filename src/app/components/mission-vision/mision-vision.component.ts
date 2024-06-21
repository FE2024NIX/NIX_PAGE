import { Component, AfterViewInit } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-mision-vision',
  standalone: true,
  imports: [],
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.css',
})
export class MissionVisionComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const misionImg = document.querySelector('.mision_img');
    const visionImg = document.querySelector('.vision_img');
    const logoImg = document.querySelector('.logo_img');

    // Configuración para animación de imagen-misión
    gsap.fromTo(
      misionImg,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: misionImg,
          start: 'top 75%',
          end: 'bottom 80%',
        },
      }
    );

    // Configuración para animación de imagen-visión

    gsap.fromTo(
      visionImg,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: visionImg,
          start: 'top 75%',
          end: 'bottom 80%',
        },
      }
    );

    // Configuración para animación de logo

    gsap.fromTo(
      logoImg,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        delay: 0.6,
        scrollTrigger: {
          trigger: logoImg,
        },
      }
    );
  }
}
