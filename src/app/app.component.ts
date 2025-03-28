import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {LeftBarComponent} from './components/left-bar/left-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LeftBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DashboardFigma';
}
