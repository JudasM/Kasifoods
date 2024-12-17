import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet,HomeComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {

}
