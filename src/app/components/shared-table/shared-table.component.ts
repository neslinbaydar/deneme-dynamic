import { Component, inject, Injector, Input, OnInit } from '@angular/core';
import { IDataSourceModel, ISchemaModel } from 'src/app/models/data-model';
import { GeneralSettings } from 'src/app/services/settings';

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

  // getComponent(component: ISchemaModel) {
  //   return component;
  // }
  getInjector(data: IDataSourceModel, cell: ISchemaModel) {
    if (cell && data) {
      let inject = this.injectors[cell.def];
      if (!inject) {
        //injector'ün instance'ını oluşturuyorum
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
      //component oluştururken bu injectorda calisiyo,general settings'e bu datayi atiyo,ben de oradan alip componente yazdiriyorum
      return inject; //oluşturduğum instance'ı dönüyorum
    }
  }
}
