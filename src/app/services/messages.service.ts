import { Injectable } from '@angular/core';
import {IMessage} from '../interfaces/message-interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public messages: IMessage[] = [
    {
      id: 1,
      mentorId: 5,
      message: "Hey! Just reviewed your latest task. Great job!",
      isSeen: true,
      isMessagedBack: true
    },
    {
      id: 2,
      mentorId: 2,
      message: "Do you need help with the backend integration?",
      isSeen: false,
      isMessagedBack: false
    },
    {
      id: 3,
      mentorId: 4,
      message: "Let me know when you're ready for the next task.",
      isSeen: true,
      isMessagedBack: false
    },
    {
      id: 4,
      mentorId: 7,
      message: "Please check the latest Figma updates.",
      isSeen: false,
      isMessagedBack: true
    },
    {
      id: 5,
      mentorId: 3,
      message: "Your code looks clean. I left a few comments on GitHub.",
      isSeen: true,
      isMessagedBack: true
    },
    {
      id: 6,
      mentorId: 6,
      message: "Quick reminder about tomorrow’s session!",
      isSeen: false,
      isMessagedBack: false
    },
    {
      id: 7,
      mentorId: 1,
      message: "Great work this week. Keep it up!",
      isSeen: true,
      isMessagedBack: true
    },
    {
      id: 8,
      mentorId: 8,
      message: "Have you pushed the final changes to Git?",
      isSeen: false,
      isMessagedBack: false
    },
    {
      id: 9,
      mentorId: 9,
      message: "Let's schedule a quick catch-up call.",
      isSeen: true,
      isMessagedBack: false
    },
    {
      id: 10,
      mentorId: 10,
      message: "Don’t forget to submit your weekly report.",
      isSeen: false,
      isMessagedBack: false
    }
  ]
  constructor() { }

  getAllMessages():IMessage[]{
    return this.messages;
  }
}
