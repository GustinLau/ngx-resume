import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [IndexComponent]
})
export class HomeModule {
}
