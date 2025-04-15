import { Component } from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faPaperclip, faPaperPlane, faPhone, faVideo} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat',
  imports: [
    FaIconComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  protected readonly faVideo = faVideo;
  protected readonly faPhone = faPhone;
  protected readonly faPaperclip = faPaperclip;
  protected readonly faPaperPlane = faPaperPlane;
}
