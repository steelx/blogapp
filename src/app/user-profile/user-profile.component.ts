import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {User} from "../shared/model/user";
import {PostsService} from "../shared/posts/posts.service";
import {Post} from "../shared/model/post";
import {PostsPaginationService} from "../shared/posts/posts-pagination.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [PostsPaginationService]
})
export class UserProfileComponent implements OnInit {

  public user$: Observable<User>;
  public posts$: Observable<Post[]> = this.postsPaginationService.posts$;
  private username: string;
  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private postsPaginationService: PostsPaginationService) { }

  ngOnInit() {
    this.user$ = this.route.params
      .switchMap(params => this.postsService.findUserByUsername(params['username']))
      .publishReplay().refCount();

    this.user$.subscribe(user => this.getPosts(user.$key));
  }

  getPosts(userKey) {
    this.postsPaginationService.loadFirstPage(userKey);
  }
  nextPosts() {
    this.postsPaginationService.loadNextPage();
  }
  prevPosts() {
    this.postsPaginationService.loadPrevPage();
  }

}
