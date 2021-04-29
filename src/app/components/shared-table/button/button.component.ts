import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() id: number;

  constructor() {}

  ngOnInit(): void {}

  clickEvent(e) {
    console.log(e);
    alert('Clicked' + this.id);
  }
}
