import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
      transition('previous <=> next', animate('0.7s ease-in')),
    ]),
  ],
})
export class PetSectionComponent {
  isHovered: boolean;

  constructor() {
    this.isHovered = false;
  }
}
