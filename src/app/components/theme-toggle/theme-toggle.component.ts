import { Component } from '@angular/core';
import {ThemeService} from '../../services/theme.service';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  imports: [FontAwesomeModule, NgIf],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  constructor(private themeService: ThemeService) {

  }

  protected changeTheme(){
    this.themeService.toggleTheme();
  }

  protected readonly faSun = faSun;
  protected getCurrentTheme() {
    return this.themeService.getCurrentTheme();
  }
}
