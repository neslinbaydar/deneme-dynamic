import { Component, Input, OnInit } from '@angular/core';
import { IDataSourceModel } from 'src/app/models/data-model';
import { GeneralSettings } from 'src/app/services/settings';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() dataSource: IDataSourceModel[];
  data: any;

  constructor(settings: GeneralSettings) {
    this.data = settings;
  }
  ngOnInit() {}
}
