import {Component} from '@angular/core';
import {NotificationService} from '../../service/notification.service';
import {takeUntil} from 'rxjs/operators';
import {BaseComponent} from '../../base/base.component';

/**
 * 路由等待效果
 */
@Component({
  selector: 'app-butter-bar',
  styleUrls: ['./butter-bar.component.scss'],
  template: `
    <div class="butterbar active" [ngClass]="{active:active}">
      <span class="bar"></span>
    </div>
  `
})
export class ButterBarComponent extends BaseComponent {

  active: boolean;

  constructor(private notificationService: NotificationService) {
    super();
    this.active = false;
    this.notificationService.on(Signal_ButterBar_Toggle)
      .pipe(takeUntil(this.componentWillDestroySignal))
      .subscribe((status: boolean) => {
        this.active = status;
      });
  }
}

// 导航动画显隐
export const Signal_ButterBar_Toggle = 'Signal_ButterBar_Toggle';
