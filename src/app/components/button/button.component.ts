import { Component, Input, OnInit } from '@angular/core';
import { IDataSourceModel } from 'src/app/models/data-model';
import { GeneralSettings } from 'src/app/services/settings';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() dataSource: IDataSourceModel[];
  data: any;
  constructor(settings: GeneralSettings) {
    this.data = settings;
  }
}
