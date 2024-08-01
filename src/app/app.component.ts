import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MissionVisionComponent } from './components/mission-vision/mision-vision.component';
import { PetSectionComponent } from './components/pet-section/pet-section.component';
import { ServicesComponent } from './components/services/services.component';
import { PlansComponent } from './components/plans/plans.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PetSectionComponent,
    ContactComponent,
    FooterComponent,
    ServicesComponent,
    HeaderComponent,
    AboutComponent,
    MissionVisionComponent,
    PlansComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Proyecto_pagina_fenix';
}
