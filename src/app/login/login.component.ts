import {Component} from '@angular/core';
import {AuthLayoutComponent} from '../shared/auth-layout/auth-layout.component';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AuthLayoutComponent,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService, Router, HttpClientModule]
})
export class LoginComponent {
  error: string = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    const {email, password} = this.loginForm.value;
    this.authService.login(email as string, password as string).subscribe(
      (response: any) => {
        if (response['status'] === 'success') {
          sessionStorage.setItem('email', email as string);
          sessionStorage.setItem('id', response['user']['id']);
          sessionStorage.setItem('name', response['user']['fullName']);
          this.router.navigate(['/shop']).then(r => {
          });
        } else {
          this.error = 'Invalid email or password';
        }
      },
      error => {
        this.error = 'Something went wrong';
      }
    )
  }

}
