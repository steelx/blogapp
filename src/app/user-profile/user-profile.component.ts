import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {User} from "../shared/model/user";
import {PostsService} from "../shared/posts/posts.service";
import {Post} from "../shared/model/post";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user$: Observable<User>;
  public posts$: Observable<Post[]>;
  private username: string;
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.user$ = this.route.params
      .switchMap(params => {
        this.username = params['username'];
        this.getPosts(this.username, {
          query: {
            limitToFirst: 3
          }
        });
        return this.postsService.findUserByUsername(this.username);
      });
  }

  getPosts(username, query) {
    this.posts$ = this.postsService.getPostsByUsername(username, query);
  }
  nextPosts() {
    this.posts$.subscribe(posts => {
      const startAt = posts[posts.length - 1].$key;
      this.getPosts(this.username, {
        query: {
          orderByKey: true,
          limitToFirst: 3,
          startAt
        }
      });
    });
  }

}
