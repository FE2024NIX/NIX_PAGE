import { Component, AfterViewInit } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css',
})
export class PlansComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const plansTitle = document.querySelector('.plans_title');
    const plansDescription = document.querySelector('.plans_description');

    const planOneImg = document.querySelector('.plan_one');
    const planTwoImg = document.querySelector('.plan_two');
    const planThreeImg = document.querySelector('.plan_three');

    // Configuración para animación de titulo
    gsap.fromTo(
      plansTitle,
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
          trigger: plansTitle,
          start: 'top 80%',
          end: 'bottom 80%',
        },
      }
    );

    // Configuración para animación de descripción

    gsap.fromTo(
      plansDescription,
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
          trigger: plansDescription,
        },
      }
    );

    // Configuración para animación de plan 1
    gsap.fromTo(
      planOneImg,
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
          trigger: planOneImg,
          start: 'top 75%',
          end: 'bottom 80%',
        },
      }
    );

    // Configuración para animación de plan 2
    gsap.fromTo(
      planTwoImg,
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
          // markers: true,
          trigger: planTwoImg,
        },
      }
    );

    // Configuración para animación de plan 3

    gsap.fromTo(
      planThreeImg,
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
          trigger: planThreeImg,
          start: 'top 75%',
          end: 'bottom 80%',
        },
      }
    );
  }
}
