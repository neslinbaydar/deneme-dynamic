import { Component, Input, OnInit } from '@angular/core';
import { GeneralSettings } from 'src/app/settings';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  data: any;
  constructor(settings: GeneralSettings) {
    this.data = settings;
    console.log(this.data);
  }

  ngOnInit(): void {}

  clickEvent(e) {
    // alert('Clicked' + this.id);
  }
}
