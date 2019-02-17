import {Component, OnInit} from '@angular/core';
import {InfoService} from '../../../core/service/info.service';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences = [];

  constructor(private infoService: InfoService) {
    this.infoService.info().then(info => this.experiences = info.experiences);
  }

  ngOnInit() {
  }

}
