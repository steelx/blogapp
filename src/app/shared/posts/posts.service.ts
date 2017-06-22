import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from "angularfire2/database";
import {Post} from "../model/post";
import {FirebaseListFactoryOpts} from "angularfire2/interfaces";
import {User} from "../model/user";

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

  findUserByUsername(username: string): Observable<User> {
    return this.af.list('users', {
      query: {
        orderByChild: 'username',
        equalTo: username
      }
    }).map(res => User.fromArray(res[0]))
      .do(user => console.log('user: ', user));
  }

  findPostKeysPerUser(userKey: string,
                      query: FirebaseListFactoryOpts = {}): Observable<string[]> {
    return this.af.list(`postsPerUser/${userKey}`, query)
      .map(postKeysPerUser => postKeysPerUser.map(post => post.$key));
  }

  findPostsForPostKeys(postKeys$: Observable<string[]>): Observable<Post[]> {
    return postKeys$
      .map(postKeys => postKeys.map(postKey => this.findPostByKey(postKey)))
      .flatMap(fbObj => Observable.combineLatest(fbObj));
  }

  getPostsByUserKey(userKey: string, query: FirebaseListFactoryOpts): Observable<Post[]> {
    const firstPagePostKeys$ = this.findPostKeysPerUser(userKey, query);
    return this.findPostsForPostKeys(firstPagePostKeys$);
  }

}
