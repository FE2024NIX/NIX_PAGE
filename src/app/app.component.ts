import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetSectionComponent } from './components/pet-section/pet-section.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PetSectionComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Proyecto_pagina_fenix';
}
