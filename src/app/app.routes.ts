/**
 *
 * Create by gustinlau on 2019/2/15
 */
import {Routes} from '@angular/router';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',  loadChildren: './module/home/home.module#HomeModule'},
  {path: 'resume',  loadChildren: './module/resume/resume.module#ResumeModule'},
  {path: 'contact',  loadChildren: './module/contact/contact.module#ContactModule'}
];
