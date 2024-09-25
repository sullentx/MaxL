import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent} from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainImageComponent } from './main-image/main-image.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
          CardsComponent,
          FooterComponent,
          HeaderComponent,
          MainImageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Nata';
}
