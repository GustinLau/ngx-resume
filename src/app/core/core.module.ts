import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Notification_Service_Provider} from './service/notification.service';
import {Info_Service_Provider} from './service/info.service';
import {components} from './component/component.list';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class CoreModule {
}

export const CoreModuleProviders = [
  Notification_Service_Provider,
  Info_Service_Provider,
];
