import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { TextComponent } from 'src/app/components/text/text.component';
import { IDataSourceModel, ISchemaModel } from 'src/app/models/data-model';
import { GlobalServices } from '../../services/services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit, OnDestroy {
  constructor(
    private globalService: GlobalServices,
    private route: ActivatedRoute
  ) {}

  private destroy$: Subject<any> = new Subject();

  schema: ISchemaModel[] = [
    { def: 'id', header: 'ID', component: TextComponent },
    { def: 'title', header: 'Title', component: TextComponent },
    { def: 'userId', header: 'User ID', component: TextComponent },
    { def: 'body', header: 'Body', component: TextComponent },
    { def: 'icon', header: 'Icon', component: IconComponent },
  ];

  dataSource: IDataSourceModel[];
  userid: string;
  ngOnInit(): void {
    //burada routingte olan parametreleri döndürüyorum http://localhost:4200/posts/1 - id:1 gibi
    this.route.params.subscribe((params: Params) => {
      this.userid = params.id;
      // burada posts/2 geliyo o id onu da routing'te belirledim, userid'e atadim,sonra aşağıda servisinde filtreledim
      console.log(params.id);
    });

    this.globalService
      .getPosts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((posts: any) => {
        if (this.userid) {
          //userid varsa filtreliyorum
          //benim datamda  userid geliyo, ben de onunla  gönderdiğimi eşleştiriyorum, ayni olanlari arraya atiyorum
          this.dataSource = posts.filter((x: any) => x.userId == this.userid);
        } else {
          //userid yoksa normal bütün postları dönecek
          this.dataSource = posts;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
