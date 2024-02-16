import {Component, Input} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
             imports: [
               HeaderComponent,
               FooterComponent,
             ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  @Input()
  activePage: string = 'Home';
  @Input()
  cartCount: number = 0;
  openChat(): void {
    // Implement your chat opening logic here
    console.log('Open chat clicked');
  }
  

}
