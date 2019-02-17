import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

/**
 * 广播
 */
@Injectable()
export class NotificationService {
  static subscriptions = {};

  /**
   * 发送广播
   * @param {string} event
   * @param payload
   */
  post(event: string, payload?: any) {
    let subject = NotificationService.subscriptions[event];
    if (!subject) {
      subject = new Subject<any>();
      NotificationService.subscriptions[event] = subject;
    }
    subject.next(payload);
  }

  /**
   * 接收广播
   * @param {string} event
   */
  on(event: string): Observable<any> {
    let subject = NotificationService.subscriptions[event];
    if (!subject) {
      subject = new Subject<any>();
      NotificationService.subscriptions[event] = subject;
    }
    return subject.asObservable();
  }

  /**
   * 移除广播
   * 在下一次遇到post/on方法再次监听
   * @param {string} event
   */
  off(event: string) {
    let subject = NotificationService.subscriptions[event];
    if (subject) {
      subject.complete();
      subject = null;
      delete NotificationService.subscriptions[event];
    }
  }

}

export const Notification_Service_Provider = {provide: NotificationService, useClass: NotificationService};
