import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass, NgForOf} from '@angular/common';
import {MainLayoutComponent} from '../shared/main-layout/main-layout.component';
import {HttpClient} from "@angular/common/http";
import {Meal} from "../interfaces/meal";
import {Cart} from "../interfaces/cart";
import {MealModalComponent} from "../meal-modal/meal-modal.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    MainLayoutComponent,
    NgForOf,
    MealModalComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  private baseUrl: string;
  private backendPort: number = 5050;
  cart: Cart[] = [];

  constructor(private http: HttpClient) {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    this.baseUrl = `${protocol}//${hostname}:${this.backendPort}/api/products`;
  }


  // onInit
  ngOnInit() {
    this.fetchMeals();
    // add event on all filter buttons
    const filterSection = document.querySelector('.filter-section');
    const filterButtons = filterSection?.querySelectorAll('input[type="checkbox"]');

    filterButtons?.forEach((button: any) => {
      button.addEventListener('change', (e:any) => {
        if (button.checked) {
          this.selectedFilters.push(button.name.toLowerCase());
        } else {
          this.selectedFilters = this.selectedFilters.filter((filter) => filter !== button.name.toLowerCase());
        }
        console.log(this.selectedFilters);
        this.filterMeals();
      });
    });

    const exampleModal = document.getElementById('staticBackdrop')
    if (exampleModal) {
      exampleModal.addEventListener('show.bs.modal', (event:any) => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button?.getAttribute('id')
        console.log(recipient);

        this.selectedMeal = this.meals.find((meal) => meal._id === recipient);

        console.log(this.selectedMeal);

      })
    }

    let cart = sessionStorage.getItem('cart');
    if (cart) {
      this.cart = JSON.parse(cart) as Cart[];
    }
  }

  cartCount() {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  }
  filteredMeals: Meal[] = [];

  meals: Meal[] = [];

  selectedFilters: string[] = [];

  selectedMeal: Meal | undefined;

  filterMeals() {
    if (this.selectedFilters.length === 0) {
      this.filteredMeals = this.meals;
      return;
    }
    this.filteredMeals = this.meals.filter((meal) => meal.filters.find((f) => this.selectedFilters.includes(f.name.toLowerCase())));
  }


  fetchMeals() {
    // Fetch meals from backend
    this.http.get(`${this.baseUrl}`).subscribe((meals) => {
      this.meals = meals as Meal[];
      this.filteredMeals = meals as Meal[];
      console.log(meals);
    });
  }

  getQuantity(meal: Meal) {
    let cartItem = this.cart.find((item) => item.meal._id === meal._id);
    return cartItem ? cartItem.quantity : 0;
  }

  decrement(meal: Meal) {
    let cartItem = this.cart.find((item) => item.meal._id === meal._id);
    if (cartItem) {
      cartItem.quantity--;
      if (cartItem.quantity === 0) {
        this.cart = this.cart.filter((item) => item.meal._id !== meal._id);
      }
    }

    this.saveCart();
  }

  increment(meal: Meal) {
    let cartItem = this.cart.find((item) => item.meal._id === meal._id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.push({meal, quantity: 1});
    }

    this.saveCart();
  }

  saveCart() {
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
