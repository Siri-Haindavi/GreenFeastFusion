import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MainLayoutComponent } from '../shared/main-layout/main-layout.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    MainLayoutComponent,CommonModule,RouterOutlet,FormsModule,ReactiveFormsModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      message: ['']
    });
  }

  onSubmit() {
    const formData = this.userForm.value;

    this.http.post('http://localhost:5050/api/contact', formData).subscribe(
      (response) => {
        console.log('Server response:', response);
        this.userForm.reset();
      },
      (error) => {
        console.error('Error sending data to the server:', error);
      }
    );
  }
}
