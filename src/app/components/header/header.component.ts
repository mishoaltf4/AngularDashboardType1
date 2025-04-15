import {Component, OnInit} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  protected readonly faBell = faBell;
  protected readonly faBellConcierge = faBellConcierge;
  protected href: string = "";

  protected isLoading: boolean = true;

  constructor( private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationEnd) {
        this.href = event.url.substring(1);
        console.log(this.href);
      }
    })
  }
}
