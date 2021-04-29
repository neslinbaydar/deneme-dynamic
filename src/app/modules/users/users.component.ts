import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
    { def: 'id', header: 'ID' },
    { def: 'name', header: 'Name' },
    { def: 'username', header: 'UserName' },
    { def: 'email', header: 'Email' },
    { def: 'phone', header: 'Phone' },
    { def: 'website', header: 'Website' },
  ];

  dataSource: IDataSourceModel[];

  ngOnInit(): void {
    this.globalService
      .getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: any) => {
        this.dataSource = user;
      });
  }

  clickedFunction(e) {
    console.log(e);
    alert('Clicked');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
