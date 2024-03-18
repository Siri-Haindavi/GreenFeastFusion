import { Component } from '@angular/core';
import {MainLayoutComponent} from '../shared/main-layout/main-layout.component';

@Component({
  selector: 'app-plans',
  standalone: true,
             imports: [
               MainLayoutComponent,
             ],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {

}

