import {Component} from '@angular/core';
import {AuthLayoutComponent} from '../shared/auth-layout/auth-layout.component';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {passwordMatchValidator} from "../shared/password-match.directive";
import {NgIf} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {User} from "../interfaces/auth";
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AuthLayoutComponent,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [AuthService, HttpClientModule, Router]
})
export class RegisterComponent {

  responseMessage: string = '';
  error: string = '';

  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  submitDetails() {
    const postData = {...this.registerForm.value}
    delete postData.confirmPassword;
    this.authService.registerUser(postData as User).subscribe(
      response => {
        this.responseMessage = "User registered successfully";
        console.log(response);
        this.router.navigate(['login']).then(r => console.log(r));
      },
      error => {
        this.error = "Please use a different email address.";
        console.log(error);
      }
    )

  }

}
