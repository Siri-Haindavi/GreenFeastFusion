import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HeaderComponent} from './shared/header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {PlansComponent} from './plans/plans.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ShopComponent} from './shop/shop.component';
import {authGuard} from "./guard/auth.guard";
import {CheckoutComponent} from "./checkout/checkout.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "home",
    component: HomepageComponent
  },
  {
    path: "plans",
    component: PlansComponent
  },
  {
    path: "contact",
    component: ContactUsComponent
  },
  {
    path: "shop",
    component: ShopComponent,
    canActivate: [authGuard]
  },
  {
    path: "checkout",
    component: CheckoutComponent,
    canActivate: [authGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: "**",
    redirectTo: "login"
  }
]
