import {Component, ViewChild, ElementRef, viewChild} from '@angular/core';
import {IMentors} from '../../interfaces/mentors-interface';
import {CommonModule} from '@angular/common';
import {MentorsService} from '../../services/mentors.service';

@Component({
  selector: 'app-mentros',
  imports: [CommonModule],
  templateUrl: './mentros.component.html',
  styleUrl: './mentros.component.scss'
})
export class MentrosComponent {
  public mentors:IMentors[] = [];
  constructor(private mentorService: MentorsService) {
    this.mentors = mentorService.getAllMentors();
  }

  @ViewChild('scrollContainer', {static: true}) scrollContainer!: ElementRef;
  @ViewChild('scrollabelItem', {static: false}) scrollabelItem!: ElementRef;
  protected scrolingCount: number = 0;

  protected scrollLeft():void{
    const scrollElement = this.scrollContainer.nativeElement as HTMLElement;
    const scrollItemWidth = this.scrollabelItem.nativeElement.offsetWidth;
    if(this.scrolingCount != 0){
      scrollElement.scrollBy({
        left: (scrollItemWidth + 32) * -1,
        behavior: 'smooth',
      })
      this.scrolingCount -= 1
    }
  }

  protected scrollRight():void{
    const scrollElement = this.scrollContainer.nativeElement as HTMLElement;
    const scrollItemWidth = this.scrollabelItem.nativeElement.offsetWidth;

    if(this.scrolingCount <= this.mentors.length - 1){
      scrollElement.scrollBy({
        left: scrollItemWidth + 32,
        behavior: 'smooth',
      })
      this.scrolingCount += 1
    }
  }
}
