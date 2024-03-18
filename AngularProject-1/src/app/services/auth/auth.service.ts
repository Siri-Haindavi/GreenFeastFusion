import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../interfaces/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private backendPort = '5050'; // Specify your backend port here
  private baseUrl: string;


  constructor(private http: HttpClient) {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    this.baseUrl = `${protocol}//${hostname}:${this.backendPort}/api/auth`;
  }

  registerUser(user: User) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(email1: string, password1: string) {
    return this.http.post(`${this.baseUrl}/login`, {
      email: email1,
      password: password1
    });
  }
}
