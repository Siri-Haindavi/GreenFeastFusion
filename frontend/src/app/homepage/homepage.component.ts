import { Component } from '@angular/core';
import {HeaderComponent} from '../shared/header/header.component';
import {NgOptimizedImage} from '@angular/common';
import {FooterComponent} from '../shared/footer/footer.component';
import {MainLayoutComponent} from '../shared/main-layout/main-layout.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
             imports: [
               HeaderComponent,
               NgOptimizedImage,
               FooterComponent,
               MainLayoutComponent,
             ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
