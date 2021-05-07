import { Component, OnInit } from '@angular/core';
import { GeneralSettings } from 'src/app/services/settings';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss'],
})
export class DomainComponent implements OnInit {
  data: any;
  constructor(settings: GeneralSettings) {
    this.data = settings;
  }

  ngOnInit(): void {}
}
