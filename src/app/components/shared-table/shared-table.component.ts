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
      type: 'text',
      def: 'id',
      component: TextComponent,
    },
    {
      type: 'text',
      def: 'name',
      component: TextComponent,
    },
    {
      type: 'text',
      def: 'username',
      component: TextComponent,
    },
    {
      type: 'button',
      def: 'button',
      component: ButtonComponent,
    },
    {
      type: 'text',
      def: 'text',
      component: TextComponent,
    },
    {
      type: 'email',
      def: 'email',
      component: MailComponent,
    },
    {
      type: 'phone',
      def: 'phone',
      component: PhoneComponent,
    },
    {
      type: 'website',
      def: 'website',
      component: DomainComponent,
    },
    {
      type: 'text',
      def: 'title',
      component: TextComponent,
    },
    {
      type: 'text',
      def: 'userId',
      component: TextComponent,
    },
    {
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
