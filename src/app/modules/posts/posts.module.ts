import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts.routing.module';
import { PostsComponent } from './posts.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [PostsComponent],
  exports: [],
  imports: [CommonModule, PostsRoutingModule, SharedModule],
})
export class PostsModule {}
