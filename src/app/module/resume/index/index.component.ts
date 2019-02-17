import {Component, OnInit} from '@angular/core';
import {InfoService} from '../../../core/service/info.service';
import {NotificationService} from '../../../core/service/notification.service';
import {Should_Change_Title_Text} from '../../../core/constant/signal.constant';

@Component({
  selector: 'app-resume-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  info: any = {};

  constructor(private notificationService: NotificationService, private infoService: InfoService) {
  }

  ngOnInit() {
    this.notificationService.post(Should_Change_Title_Text, '<h2 class="flipInX animated">我的<span class="color-white">简历</span></h2>');
    this.infoService.info().then(info => this.info = info);
  }

}
