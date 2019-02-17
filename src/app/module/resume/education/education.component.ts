import {Component, OnInit} from '@angular/core';
import {InfoService} from '../../../core/service/info.service';

@Component({
  selector: 'app-resume-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educations = [];

  constructor(private infoService: InfoService) {
    this.infoService.info().then(info => this.educations = info.educations);
  }

  ngOnInit() {
  }

}
