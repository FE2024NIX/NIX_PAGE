import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-pet-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-section.component.html',
  styleUrl: './pet-section.component.css',
  animations: [
    trigger('imageState', [
      state(
        'previous',
        style({
          opacity: 1,
        })
      ),
      state(
        'next',
        style({
          opacity: 0,
        })
      ),
      transition('previous <=> next', animate('0.6s ease-in')),
    ]),
  ],
})
export class PetSectionComponent implements AfterViewInit {
  isHovered: boolean;

  constructor() {
    this.isHovered = false;
  }

  ngAfterViewInit(): void {
    const petImg = document.querySelector('.pet_img');
    const petDescription = document.querySelector('.pet_description');
    const petPolygon = document.querySelector('.pet_polygon');

    // Configuración para animación de polígono
    gsap.fromTo(
      petPolygon,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: petPolygon,
        },
      }
    );

    // Configuración para animación de mascota
    gsap.fromTo(
      petImg,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: petImg,
        },
      }
    );

    // Configuración para animación de descripción

    gsap.fromTo(
      petDescription,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: petDescription,
        },
      }
    );
  }
}
