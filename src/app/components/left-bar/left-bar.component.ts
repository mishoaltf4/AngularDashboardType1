import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {CommonModule, NgClass} from '@angular/common';
import {INavigation} from '../../interfaces/navigation-interface';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faCubesStacked, faBookOpen, faIdBadge, faCommentDots,faGear} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-left-bar',
  imports: [RouterLink, CommonModule, RouterLinkActive, FontAwesomeModule],
  templateUrl: './left-bar.component.html',
  styleUrl: './left-bar.component.scss'
})
export class LeftBarComponent implements OnInit{

  protected href: string = "";

  navigation: INavigation[] = [
    {label: 'overview', path: 'dashboard', icon: faCubesStacked},
    {label: 'tasks', path: 'tasks', icon: faBookOpen},
    {label: 'mentors', path: 'mentors', icon: faIdBadge},
    {label: 'messages', path: 'messages', icon: faCommentDots},
    {label: 'settings', path: 'settings', icon: faGear},
  ]

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationEnd) {
        this.href = event.url.substring(1);
        console.log(this.href);
      }
    })
  }

  protected readonly faIdBadge = faIdBadge;
}
