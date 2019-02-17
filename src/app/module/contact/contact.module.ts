import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './contact.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [IndexComponent]
})
export class ContactModule {
}
