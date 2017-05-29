import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../shared/posts/posts.service";
import {Observable} from "rxjs/Observable";
import {Post} from "../shared/model/post";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  public post$: Observable<Post>;
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.post$ = this.route.params
      .switchMap(param => this.postsService.findPostByKey(param['id']));
  }

}
