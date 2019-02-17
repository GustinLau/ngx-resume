import {Component, OnInit} from '@angular/core';
import {BaseComponent} from './core/base/base.component';
import {Should_Change_Title_Text} from './core/constant/signal.constant';
import {NotificationService} from './core/service/notification.service';
import {takeUntil} from 'rxjs/operators';
import {InfoService} from './core/service/info.service';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {Signal_ButterBar_Toggle} from './core/component/butter-bar/butter-bar.component';

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

  constructor(private router: Router, private notificationService: NotificationService, private infoService: InfoService) {
    super();
    router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.notificationService.post(Signal_ButterBar_Toggle, true);
        } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          this.notificationService.post(Signal_ButterBar_Toggle, false);
        }
      }
    );
  }

  ngOnInit(): void {
    this.notificationService.on(Should_Change_Title_Text)
      .pipe(takeUntil(this.componentWillDestroySignal))
      .subscribe(text => this.titleText = text);

    this.infoService.info().then(info => this.info = info);
  }


}
