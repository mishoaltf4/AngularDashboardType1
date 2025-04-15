import { Injectable } from '@angular/core';
import {IMentors} from '../interfaces/mentors-interface';

@Injectable({
  providedIn: 'root'
})
export class MentorsService {

  public mentors: IMentors[] =
    [
      {
        id: 1,
        name: "Misho",
        position: "Web developer",
        following: false,
        countOfTasks: 49,
        reviews: "5.0",
        reviewsCount: 760,
        about: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . "
      },
      {
        id: 5,
        name: "Misho",
        position: "Web developer",
        following: false,
        countOfTasks: 49,
        reviews: "5.0",
        reviewsCount: 760,
        about: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . "
      },
      {
        id: 2,
        name: "Giorgi",
        position: "Back-end developer",
        following: true,
        countOfTasks: 31,
        reviews: "5.0",
        reviewsCount: 760,
        about: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . "
      },
      {
        id: 3,
        name: "Liza",
        position: "Designer",
        following: false,
        countOfTasks: 34,
        reviews: "5.0",
        reviewsCount: 760,
        about: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . "
      },
      {
        id: 4,
        name: "Tamuna",
        position: "Super woman",
        following: true,
        countOfTasks: 101,
        reviews: "5.0",
        reviewsCount: 760,
        about: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . "
      },
      {
        id: 6,
        name: "Nika",
        position: "Full-stack developer",
        following: true,
        countOfTasks: 67,
        reviews: "4.9",
        reviewsCount: 540,
        about: "Hi, I'm Nika. Passionate about building scalable web apps and solving real-world problems."
      },
      {
        id: 7,
        name: "Sophie",
        position: "UI/UX Designer",
        following: false,
        countOfTasks: 28,
        reviews: "5.0",
        reviewsCount: 430,
        about: "Hi, I'm Sophie. I love crafting intuitive user experiences with clean and aesthetic designs."
      },
      {
        id: 8,
        name: "Alex",
        position: "Mobile developer",
        following: false,
        countOfTasks: 45,
        reviews: "4.8",
        reviewsCount: 610,
        about: "Hi, I'm Alex. Experienced in Flutter and React Native, and I enjoy creating performant mobile apps."
      },
      {
        id: 9,
        name: "Mariam",
        position: "Front-end developer",
        following: true,
        countOfTasks: 38,
        reviews: "5.0",
        reviewsCount: 510,
        about: "Hi, I'm Mariam. I specialize in building responsive, dynamic interfaces with Vue and React."
      },
      {
        id: 10,
        name: "Dato",
        position: "Project Manager",
        following: false,
        countOfTasks: 120,
        reviews: "4.7",
        reviewsCount: 300,
        about: "Hi, I'm Dato. I help teams stay organized and deliver top-notch products on time."
      },
      {
        id: 11,
        name: "Elene",
        position: "QA Engineer",
        following: true,
        countOfTasks: 52,
        reviews: "4.9",
        reviewsCount: 400,
        about: "Hi, I'm Elene. Detail-oriented tester ensuring every release is rock-solid."
      },
      {
        id: 12,
        name: "Gio",
        position: "DevOps Engineer",
        following: false,
        countOfTasks: 60,
        reviews: "5.0",
        reviewsCount: 290,
        about: "Hi, I'm Gio. I automate, optimize, and monitor systems to keep things running smoothly."
      },
      {
        id: 13,
        name: "Tika",
        position: "Data Analyst",
        following: true,
        countOfTasks: 33,
        reviews: "4.8",
        reviewsCount: 410,
        about: "Hi, I'm Tika. I turn data into meaningful insights using Python and SQL."
      },
      {
        id: 14,
        name: "Lasha",
        position: "Cybersecurity Specialist",
        following: false,
        countOfTasks: 40,
        reviews: "5.0",
        reviewsCount: 320,
        about: "Hi, I'm Lasha. I secure digital infrastructures and love a good security challenge."
      },
      {
        id: 15,
        name: "Ana",
        position: "Content Strategist",
        following: true,
        countOfTasks: 29,
        reviews: "4.9",
        reviewsCount: 275,
        about: "Hi, I'm Ana. I craft compelling content strategies that resonate with audiences."
      }
    ]

  constructor() { }

  public getAllMentors():IMentors[]{
    return this.mentors;
  }
}
