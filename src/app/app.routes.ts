import { Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {MentrosComponent} from './pages/mentros/mentros.component';
import {MessagesComponent} from './pages/messages/messages.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'mentors', component: MentrosComponent},
  {path: 'messages', component: MessagesComponent},
];
