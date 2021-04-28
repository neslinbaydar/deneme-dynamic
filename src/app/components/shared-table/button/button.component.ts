import { Component, OnInit } from '@angular/core';
import { ISchemaModel } from 'src/app/models/data-model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  isActionActive: true;
  constructor() {}

  schema: ISchemaModel[] = [{ def: 'actions', header: 'Actions' }];
  ngOnInit(): void {}
  clickEvent(e) {
    console.log(e);
    alert('Clicked');
  }
}
