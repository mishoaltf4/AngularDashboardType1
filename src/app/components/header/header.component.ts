import {Component, OnInit} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  protected readonly faBell = faBell;
  protected readonly faBellConcierge = faBellConcierge;

  protected isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }
}
