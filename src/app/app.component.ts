import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetSectionComponent } from './components/pet-section/pet-section.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { EmpresaComponent } from './components/empresa/empresa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PetSectionComponent, ContactComponent, FooterComponent, ServicesComponent,  EmpresaComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  title = 'Proyecto_pagina_fenix';
  images = [
    {
      imageSrc:
      './assets/images/imagen1.png',
      imageAlt: 'imagen1',
      title: 'DESARROLO DE SOFTWARE',
      text: 'El equipo de Fenix Triad, esta enfocado en realizar proyectos con base en desarrollo de software, dando soluciones eficientes e integrales, para la implementación de sistemas sofisticados, de esta manera se trabaja en conjunto para los objetivos empresarias con procesos con valor etico y con los mejores profesionales.'
    },
    {
      imageSrc:
      './assets/images/imagen2.png',
      imageAlt: 'service2',
      title: 'ANALISIS DE DATOS',
      text: 'Brindamos servicios de analítica de datos orientados a la inteligencia de negocios, ayudamos a visualizar métricas que permiten identificar el estado actual del negocio brindando las herramientas necesarias para tomar decisiones en tu organización.'
    },
    {
      imageSrc:
      './assets/images/imagen3.png',
      imageAlt: 'service3',
      title: 'DISEÑO UI/UX',
      text: 'Maximizamos la usabilidad y el atractivo visual de tu sitio web con nuestro diseño UI/UX en tu empresa, nos enfocamos en crear interfaces que no solo se vean bien, sino que sean amigables para el usuario final y además funcionen de manera practica.'
    },
    {
      imageSrc:
      './assets/images/imagen4.png',
      imageAlt: 'service4',
      title: 'CAPACITACIONES',
      text: 'Descubre el futuro del desarrollo de software con nuestro programa de capacitación: desde fundamentos hasta las últimas tecnologías en IA, Desarrollo de software, Diseño UI/UX. Aprende con nuestros profesionales para extender tus conocimientos, aplica lo aprendido en proyectos reales y conecta con una comunidad de profesionales.'
    },
  ]
}
