import { Component } from '@angular/core';
import { GeneralSettings } from 'src/app/services/settings';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  data: any; //injector ile entitylerime data yolluyorum

  constructor(settings: GeneralSettings) {
    this.data = settings;
  }
}
