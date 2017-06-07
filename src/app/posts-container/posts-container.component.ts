import { Component, OnInit } from '@angular/core';
import {PostsService} from '../shared/posts/posts.service';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {

  private postsLimit = 5;
  posts$;
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.posts$ = this.postService.getAllPosts({query: {
      limitToFirst: this.postsLimit
    }})
      .publishReplay().refCount(); // to avoid multiple subscribe network load
  }

  nextPosts() {

    this.posts$ = this.posts$.switchMap(posts => {
      const startAt = posts[posts.length - 1].$key;
      return this.postService.loadNextPage(startAt, this.postsLimit);
    });
  }

}
