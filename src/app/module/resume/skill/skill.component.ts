import {Component, OnInit} from '@angular/core';
import {InfoService} from '../../../core/service/info.service';

@Component({
  selector: 'app-resume-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  chartOption = {};

  constructor(private infoService: InfoService) {
    this.infoService.info().then(info => this.chartOption = info.skillOptions);
  }

  ngOnInit() {
  }

}
