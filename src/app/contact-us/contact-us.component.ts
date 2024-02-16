import { Component } from '@angular/core';
import {MainLayoutComponent} from '../shared/main-layout/main-layout.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
             imports: [
               MainLayoutComponent,
             ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
