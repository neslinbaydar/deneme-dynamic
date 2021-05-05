import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TextComponent } from 'src/app/components/text/text.component';

import { IDataSourceModel, ISchemaModel } from 'src/app/models/data-model';
import { GlobalServices } from '../../services/services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor(private globalService: GlobalServices) {}

  private destroy$: Subject<any> = new Subject();

  schema: ISchemaModel[] = [
    { def: 'id', header: 'ID', component: TextComponent },
    { def: 'name', header: 'Name', component: TextComponent },
    { def: 'username', header: 'UserName', component: TextComponent },
    { def: 'email', header: 'Email', component: TextComponent },
    { def: 'phone', header: 'Phone', component: TextComponent },
    { def: 'website', header: 'Website', component: TextComponent },
  ];

  dataSource: IDataSourceModel[];

  ngOnInit(): void {
    this.globalService
      .getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => {
        this.dataSource = users;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
