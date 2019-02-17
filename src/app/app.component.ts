import {Component, OnInit} from '@angular/core';
import {BaseComponent} from './core/base/base.component';
import {Should_Change_Title_Text} from './core/constant/signal.constant';
import {NotificationService} from './core/service/notification.service';
import {takeUntil} from 'rxjs/operators';
import {InfoService} from './core/service/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  titleText;
  info: any = {};

  menus = [{
    name: '首页',
    path: 'home',
    icon: 'icon-home'
  }, {
    name: '简历',
    path: 'resume',
    icon: 'icon-resume'
  }, {
    name: '联系方式',
    path: 'contact',
    icon: 'icon-contact'
  }];

  constructor(private notificationService: NotificationService, private infoService: InfoService) {
    super();
  }

  ngOnInit(): void {
    this.notificationService.on(Should_Change_Title_Text)
      .pipe(takeUntil(this.componentWillDestroySignal))
      .subscribe(text => this.titleText = text);

    this.infoService.info().then(info => this.info = info);
  }


}
