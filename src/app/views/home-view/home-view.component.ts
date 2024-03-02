import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { HomeComponent } from '../../components/minitina-web/home/home.component';
import { CarouselComponent } from '../../components/minitina-web/home/carousel/carousel.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {

}
