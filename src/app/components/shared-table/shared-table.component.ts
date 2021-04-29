import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { IDataSourceModel, ISchemaModel } from 'src/app/models/data-model';

import { IconComponent } from './icon/icon.component';
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss'],
})
export class SharedTableComponent implements OnInit {
  @Input() schema: ISchemaModel[];
  @Input() dataSource: IDataSourceModel[];

  component: any;

  // entities: any = [
  //   {
  //     type: 'text',
  //      def:'name',
  //     component: textComponent,
  //   },//bu benim schemam
  //   {
  //     type: 'button',
  //     name: ButtonComponent,
  //   },
  //   {
  //     type: 'text',
  //     name: TextComponent,
  //   },
  // ];
  // buraya nekadar entity yazarsam ekliyorum,onun icinde buldugu muddetce calisacak

  //clickIcon() {}
  constructor(
    private vf: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  ngOnInit(): void {
    //this.renderComponentByType('icon');
    // bu sayfamın en asagisında calisiacak ve icon render olucak default olarak
  }

  //1.yöntem-switch-case ile:
  renderComponentByType(type: string) {
    // burdan hangi type geliyorsa ona uygun switchden birini seçiyor
    this.component = null;

    switch (type) {
      case 'icon':
        this.component = IconComponent;
        break;
      case 'text':
        this.component = TextComponent;
        break;
      case 'button':
        this.component = ButtonComponent;
        // örneğin,componente butonun componentini veriyo
        break;
      default:
        if (!this.component) throw new Error(`type ${type} not supported`);
        return alert(`type ${type} not supported`);
        break;
    }
    const resolver = this.componentFactoryResolver.resolveComponentFactory(
      this.component
    );
    return this.vf.createComponent(resolver);
  }

  // rendercomponent with filter:2.yöntem

  // renderComponentByType(type: string) {

  //   this.component = null;
  //   console.log(type);
  //   var currentType = this.entities.filter((x: any) => x.type == type)[0];
  //   console.log(currentType);
  //   if (currentType) {
  //     const resolver = this.componentFactoryResolver.resolveComponentFactory(
  //       currentType.name
  //     );
  //     return this.vf.createComponent(resolver);
  //   } else {
  //     alert('something is wrong');
  //   }
  // }
}
