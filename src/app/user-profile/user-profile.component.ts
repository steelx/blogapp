import { Component, OnInit } from '@angular/core';
import {PostsService} from "../shared/posts/posts.service";
import {Observable} from "rxjs/Observable";
import {User} from "../shared/model/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user$: Observable<User>;
  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.user$ = this.route.params.switchMap(params => this.postsService.findUserByUsername(params['username']));
  }

}
