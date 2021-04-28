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

  @Input() icon: string;
  @Output() emitFunction = new EventEmitter();
  //@Output() columnClicked = new EventEmitter<>();

  clickEvent(e) {
    this.emitFunction.emit(e);
  }
  clickIcon() {}
  constructor(
    private vf: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  ngOnInit(): void {
    let resolver = this.componentFactoryResolver.resolveComponentFactory(
      IconComponent
    );
    let componentRef = this.vf.createComponent(resolver);
    let componentFactory = this.vf.createComponent(resolver);
  }

  renderComponentByType(type: string) {
    let component = null;
    switch (type) {
      case 'icon':
        component = IconComponent;
        break;
      case 'text':
        component = TextComponent;
        break;
      case 'button':
        component = ButtonComponent;
        break;
      default:
        if (!component) throw new Error(`type ${type} not supported`);
        const resolver = this.componentFactoryResolver.resolveComponentFactory(
          component
        );
        return this.vf.createComponent(resolver);
        break;
    }
  }
}
