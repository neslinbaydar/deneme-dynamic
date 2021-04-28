import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostModel } from '../models/posts-model';

@Injectable({ providedIn: 'root' })
export class GlobalServices {
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  getPosts(): Observable<IPostModel[]> {
    return this.http.get<IPostModel[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
