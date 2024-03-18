import { Component } from '@angular/core';
import {MainLayoutComponent} from "../shared/main-layout/main-layout.component";
import {Cart} from "../interfaces/cart";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    MainLayoutComponent,
    NgForOf
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  protected cart: Cart[] | undefined;
  constructor() {
  }

  ngOnInit() {
    // get the cart from the session storage
    this.cart = JSON.parse(sessionStorage.getItem('cart') as string) as Cart[];
    console.log(this.cart);
  }
}
