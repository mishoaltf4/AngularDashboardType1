import { Component } from '@angular/core';
import {CommonModule, NgClass, NgForOf} from '@angular/common';
import {MentorsService} from '../../services/mentors.service';
import {IMentors} from '../../interfaces/mentors-interface';
import {MessagesService} from '../../services/messages.service';
import {IMessage} from '../../interfaces/message-interface';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {ChatComponent} from '../../components/chat/chat.component';

@Component({
  selector: 'app-messages',
  imports: [
    NgForOf,
    FaIconComponent,
    NgClass,
    CommonModule,
    ChatComponent
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  public combinedData: {name: string, message: string, isSeen: boolean, isAnsweredBack: boolean}[]
  public mentors: IMentors[] = [];
  public messages: IMessage[] = [];
  public windowSize = window.innerWidth;

  constructor(private mentorService: MentorsService, private messagesService: MessagesService) {
    this.mentors = this.mentorService.getAllMentors();
    this.messages = this.messagesService.getAllMessages();

    this.combinedData = this.messages.map(msg => {
      const mentor = this.mentors.find(m => m.id === msg.mentorId);
      return{
        name: mentor ? mentor.name : "unknow mentor",
        message: msg.message,
        isSeen: msg.isSeen,
        isAnsweredBack: msg.isMessagedBack
      }
    })
    console.log(this.windowSize)
  }

  protected readonly faCheck = faCheck;
}
