import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  constructor(private router: ActivatedRoute) {
    console.log(this.router.snapshot.url.map(segment => segment.path).join('/'));
  }
}
