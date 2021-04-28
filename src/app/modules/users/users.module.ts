import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [UsersComponent],
  exports: [],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
