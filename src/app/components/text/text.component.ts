import { Component } from '@angular/core';
import { GeneralSettings } from 'src/app/settings';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  data: any;

  constructor(settings: GeneralSettings) {
    this.data = settings;
  }
}
