import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../../core/service/notification.service';
import {Should_Change_Title_Text} from '../../../core/constant/signal.constant';
import {InfoService} from '../../../core/service/info.service';

@Component({
  selector: 'app-contact-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  info: any = {};

  constructor(private notificationService: NotificationService, private infoService: InfoService) {
  }

  ngOnInit() {
    this.notificationService.post(Should_Change_Title_Text, '<h2 class="flipInX animated">联系<span class="color-white">方式</span></h2>');
    this.infoService.info().then(info => this.info = info);
  }

}
