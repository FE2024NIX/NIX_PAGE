import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { Router,RouterLink } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  scrollToComponent() {
    this.viewportScroller.scrollToAnchor('ContactComponent');
  }
}
