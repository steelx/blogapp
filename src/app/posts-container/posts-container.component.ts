import { Component, OnInit } from '@angular/core';
import {PostsService} from '../shared/posts/posts.service';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {
  posts$;
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.posts$ = this.postService.getPosts()
      .publishReplay().refCount();
  }

}
