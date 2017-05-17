import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostsService {

  private rootUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private _http: Http) { }


  getPosts(): Observable<any> {
    return this._http.get(`${this.rootUrl}/posts`)
      .map(res => res.json());
  }

}
