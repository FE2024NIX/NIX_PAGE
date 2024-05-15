import { Component, Input, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})


export class ServicesComponent {
   slides = [
    { img: '../../../assets/images/imagen1.png',  },
    { img: '../../../assets/images/imagen2.png', },
    { img: '../../../assets/images/imagen3.png', },
    { img: '../../../assets/images/imagen4.png',  }
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
  
}