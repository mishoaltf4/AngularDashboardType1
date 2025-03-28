import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  protected isLoading: boolean = true;

  protected radialProgressNum: number = 30;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      console.log(this.isLoading)
    }, 1000);
    console.log(this.isLoading)
  }
}
