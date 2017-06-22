import { Injectable } from '@angular/core';
import {PostsService} from "./posts.service";
import {FirebaseListFactoryOpts} from "angularfire2/interfaces";
import {Observable} from "rxjs/Observable";
import {Post} from "../model/post";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

const INIT_POST = {
  $key: undefined,
  post_title: undefined,
  post_body: undefined,
  date: undefined,
  user: undefined
};

@Injectable()
export class PostsPaginationService {

  private postsLimit = 3;
  private userKey: string;
  private lastPostKey: string;
  private firstPostKey: string;

  private postsSubject = new BehaviorSubject([INIT_POST]);
  public posts$: Observable<Post[]> = this.postsSubject.asObservable();

  constructor(private postsService: PostsService) { }

  getPosts(userKey, query: FirebaseListFactoryOpts) {
    this.postsService.getPostsByUserKey(userKey, query)
      .subscribe(posts => {
        this.lastPostKey = posts[posts.length - 1].$key;
        this.firstPostKey = posts[0].$key;
        this.postsSubject.next(posts);
      });
  }

  loadFirstPage(userKey) {
    this.userKey = userKey;
    this.getPosts(this.userKey, {
      query: {
        limitToFirst: this.postsLimit
      }
    });
  }

  loadNextPage() {
    this.getPosts(this.userKey, {
      query: {
        limitToFirst: this.postsLimit,
        orderByKey: true,
        startAt: this.lastPostKey
      }
    });
  }

  loadPrevPage() {
    this.getPosts(this.userKey, {
      query: {
        limitToLast: this.postsLimit,
        orderByKey: true,
        endAt: this.firstPostKey
      }});
  }

}
