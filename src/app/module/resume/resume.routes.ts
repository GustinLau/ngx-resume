/**
 *
 * Create by gustinlau on 2019/2/15
 */
import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SkillComponent} from './skill/skill.component';
import {EducationComponent} from './education/education.component';
import {ExperienceComponent} from './experience/experience.component';


export const ROUTES: Routes = [
  {
    path: '', component: IndexComponent, children: [
      {path: '', redirectTo: 'skill', pathMatch: 'full'},
      {path: 'skill', component: SkillComponent},
      {path: 'education', component: EducationComponent},
      {path: 'experience', component: ExperienceComponent}
    ]
  }
];
