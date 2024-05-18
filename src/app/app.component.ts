import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetSectionComponent } from './components/pet-section/pet-section.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PetSectionComponent, ContactComponent, FooterComponent, ServicesComponent,
    EmpresaComponent, NavbarComponent, HeaderComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Proyecto_pagina_fenix';
}