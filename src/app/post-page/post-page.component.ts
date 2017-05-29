import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../shared/posts/posts.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    const post$ = this.route.params.switchMap(param => {
      return this.postsService.findPostById(param['id']);
    });

    post$.subscribe(console.log);
  }

}
