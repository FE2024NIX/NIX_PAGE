import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

interface Slide {
  img: string;
  title:
    | {
        main: string;
        highlight: string;
      }
    | string;
  desc: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  slides: Slide[] = [
    {
      img: '../../../assets/images/desarrollo-software.png',
      title: {
        main: 'DESARROLLO DE',
        highlight: ' SOFTWARE',
      },
      desc: 'El equipo de Fénix Triad está enfocado en realizar proyectos con base en desarrollo de software, dando soluciones eficientes e integrales, para la implementación de sistemas sofisticados, de esta manera se trabaja en conjunto para los objetivos empresariales con procesos con valor ético y con los mejores profesionales.',
    },
    {
      img: '../../../assets/images/análisis-datos.png',
      title: {
        main: 'ANÁLISIS DE',
        highlight: ' DATOS',
      },
      desc: 'Brindamos servicios de analítica de datos orientados a la inteligencia de negocios, ayudamos a visualizar métricas que permiten identificar el estado actual del negocio brindando las herramientas necesarias para tomar decisiones en tu organización.',
    },
    {
      img: '../../../assets/images/diseño-UI.png',
      title: {
        main: 'DISEÑO',
        highlight: ' UI/UX',
      },
      desc: 'Maximizamos la usabilidad y el atractivo visual de tu sitio web con nuestro diseño UI/UX en tu empresa, nos enfocamos en crear interfaces que no solo se vean bien, sino que sean amigables para el usuario final y además funcionen de manera práctica.',
    },
    {
      img: '../../../assets/images/capacitaciones.png',
      title: {
        main: 'CAPACITAC',
        highlight: 'IONES',
      },
      desc: 'Descubre el futuro del desarrollo de software con nuestro programa de capacitación: desde fundamentos hasta las últimas tecnologías en IA, Desarrollo de software, Diseño UI/UX. Aprende con nuestros profesionales para extender tus conocimientos, aplica lo aprendido en proyectos reales y conecta con una comunidad de profesionales.',
    },
  ];

  slideConfig = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  isObject(value: any): value is { main: string; highlight: string } {
    return typeof value === 'object' && 'main' in value && 'highlight' in value;
  }
}
