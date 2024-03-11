import {Component, Input, signal} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {Router} from "@angular/router";
import {Cart} from "../../interfaces/cart";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    NgIf,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [Router]
})
export class HeaderComponent {

  @Input()
  activePage: string = 'Home';

  @Input()
  cartCount: number = 0;

  private readonly myScriptElement: HTMLScriptElement;
  isOpen = false;
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void
  {
    if (sessionStorage.getItem('email')) {
      this.isLoggedIn = true;
      this.name = sessionStorage.getItem('name');
    }

    if (sessionStorage.getItem('cart')) {
      let cart = JSON.parse(sessionStorage.getItem('cart')!) as Cart[]
      if (cart.length > 0) {
        this.cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
      }
    }

  }

  logout(): void {
    if (sessionStorage.getItem('email')) {
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('id');
      sessionStorage.removeItem('name');
      this.router.navigate(['/login']).then(r => {});
    }
  }

  login(): void {
    this.router.navigate(['/login']).then(r => {});
  }

  toggleNavbar(): void {
    console.log('toggleNavbar');
    this.isOpen = !this.isOpen;
  }

  protected name: string | null | undefined;
}