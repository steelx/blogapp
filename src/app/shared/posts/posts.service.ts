import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from "angularfire2/database";
import {Post} from "../model/post";
import {FirebaseListFactoryOpts} from "angularfire2/interfaces";


@Injectable()
export class PostsService {

  constructor(private af: AngularFireDatabase) { }

  getAllPosts(query: FirebaseListFactoryOpts = {}): Observable<Post[]> {
    return this.af.list('/posts', query)
      .map(Post.fromJsonList);
  }

  loadNextPage(startAt: string, limit = 5) {
    return this.getAllPosts({query: {
      orderByKey: true,
      limitToFirst: 5,
      startAt
    }});
  }


  findPostByKey(key): Observable<Post> {
    return this.af.object(`/posts/${key}`);
  }

}
