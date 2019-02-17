import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {SkillComponent} from './skill/skill.component';
import {RouterModule} from '@angular/router';
import {EducationComponent} from './education/education.component';
import {ExperienceComponent} from './experience/experience.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {ROUTES} from './resume.routes';


@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [IndexComponent, SkillComponent, EducationComponent, ExperienceComponent]
})
export class ResumeModule {
}
