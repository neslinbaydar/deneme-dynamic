import { Component } from '@angular/core';
import { GeneralSettings } from 'src/app/settings';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent {
  data: any;
  constructor(settings: GeneralSettings) {
    this.data = settings;
  }
}
