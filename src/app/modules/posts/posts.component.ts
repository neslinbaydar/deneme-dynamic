import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IDataSourceModel, ISchemaModel } from 'src/app/models/data-model';
import { GlobalServices } from '../../services/services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private globalService: GlobalServices
  ) //private vf: ViewContainerRef,
  //private componentFactoryResolver: ComponentFactoryResolver
  {}

  private destroy$: Subject<any> = new Subject();

  schema: ISchemaModel[] = [
    { def: 'id', header: 'ID' },
    { def: 'title', header: 'Title' },
    { def: 'userId', header: 'User ID' },
    { def: 'body', header: 'Body' },
  ];
  dataSource: IDataSourceModel[];

  ngOnInit(): void {
    this.globalService
      .getPosts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((posts: any) => {
        this.dataSource = posts;
      });
  }
  ngAfterViewInit() {
    //let resolver = this.componentFactoryResolver.resolveComponentFactory(
    //  PostsComponent
    //);
    //let componentFactory = this.vf.createComponent(resolver);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
