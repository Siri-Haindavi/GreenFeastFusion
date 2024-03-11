import { Component } from '@angular/core';
import {MainLayoutComponent} from "../main-layout/main-layout.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    MainLayoutComponent
  ],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss', './auth-layout.component.css'] 
})
export class AuthLayoutComponent {

}
