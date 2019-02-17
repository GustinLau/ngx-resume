import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class InfoService {
  static info: any;

  constructor(private http: HttpClient) {
  }

  info(): Promise<any> {
    if (InfoService.info) {
      return Promise.resolve(InfoService.info);
    } else {
      return new Promise<any>((resolve) => {
        this.http.get('./data.json')
          .subscribe(
            value => {
              InfoService.info = value;
              if (!environment.production) {
                console.log(value);
              }
              resolve(value);
            },
            error => {
              console.error(error);
            },
            () => {
              if (!environment.production) {
                console.log('request complete');
              }
            });
      });
    }
  }
}

export const Info_Service_Provider = {provide: InfoService, useClass: InfoService};
