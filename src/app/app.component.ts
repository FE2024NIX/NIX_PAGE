import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetSectionComponent } from './components/pet-section/pet-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PetSectionComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Proyecto_pagina_fenix';
}
