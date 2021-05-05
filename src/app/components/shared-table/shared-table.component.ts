import { Component, Injector, Input, OnInit } from '@angular/core';
import { IDataSourceModel, ISchemaModel } from 'src/app/models/data-model';

import { TextComponent } from '../text/text.component';
import { ButtonComponent } from '../button/button.component';
import { MailComponent } from '../mail/mail.component';
import { PhoneComponent } from '../phone/phone.component';
import { DomainComponent } from '../domain/domain.component';
import { GeneralSettings } from 'src/app/settings';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss'],
})
export class SharedTableComponent implements OnInit {
  @Input() schema: ISchemaModel[];
  @Input() dataSource: IDataSourceModel[];
  private injectors = {};
  component: any;

  constructor(private inj: Injector) {}
  ngOnInit(): void {}

  entities: any = [
    {
      id: 1,
      type: 'text',
      def: 'id',
      component: TextComponent,
    },
    {
      id: 2,
      type: 'text',
      def: 'name',
      component: TextComponent,
    },
    {
      id: 3,
      type: 'text',
      def: 'username',
      component: TextComponent,
    },
    {
      id: 4,
      type: 'button',
      def: 'button',
      component: ButtonComponent,
    },
    {
      id: 5,
      type: 'text',
      def: 'text',
      component: TextComponent,
    },
    {
      id: 6,
      type: 'email',
      def: 'email',
      component: MailComponent,
    },
    {
      id: 7,
      type: 'phone',
      def: 'phone',
      component: PhoneComponent,
    },
    {
      id: 8,
      type: 'website',
      def: 'website',
      component: DomainComponent,
    },
    {
      id: 9,
      type: 'text',
      def: 'title',
      component: TextComponent,
    },
    {
      id: 10,
      type: 'text',
      def: 'userId',
      component: TextComponent,
    },
    {
      id: 11,
      type: 'text',
      def: 'body',
      component: TextComponent,
    },
  ];

  getComponent(def: string) {
    if (def) {
      let currentEntity = this.entities.find((x: any) => x.def == def);
      if (currentEntity) {
        return currentEntity.component;
      }
    }
  }
  getInjector(data: IDataSourceModel, cell: ISchemaModel) {
    console.log(data);
    console.log(cell);
    if (cell && data) {
      let inject = this.injectors[cell.def];
      if (!inject) {
        inject = Injector.create(
          [
            {
              provide: GeneralSettings,
              useValue: data[cell.def],
            },
          ],
          this.inj
        );
      }
      return inject;
    }
  }
}
