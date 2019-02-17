/**
 *
 * Create by gustinlau on 2019/2/15
 */
import {OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

export class BaseComponent implements OnDestroy {
  protected componentWillDestroySignal: Subject<any> = new Subject();

  ngOnDestroy(): void {
    this.componentWillDestroySignal.next();
    this.componentWillDestroySignal.unsubscribe();
  }
}
