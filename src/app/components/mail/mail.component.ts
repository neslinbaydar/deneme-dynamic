import { Component, Input, OnInit } from '@angular/core';
import { IDataSourceModel } from 'src/app/models/data-model';
import { GeneralSettings } from 'src/app/services/settings';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent {
  @Input() dataSource: IDataSourceModel[];
  data: any;

  constructor(settings: GeneralSettings) {
    this.data = settings;
  }
}
