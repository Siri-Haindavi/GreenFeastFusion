import {Component, Inject, Injector, PLATFORM_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject-1';

  constructor(
    private injector: Injector,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    console.log('hi, we\'re here!');
    if (isPlatformServer(this.platformId)) {
      let req = this.injector.get('request');
      console.log("locales from crawlers: " + req.headers["accept-language"]);
      console.log("host: " + req.get('host'));
      console.log("headers: ", req.headers);
    } else {
      console.log('we\'re rendering from the browser, there is no request object.');
    }
  }
}
