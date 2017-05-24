import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../shared/model/post";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  @Input() postsList: Post[];

  constructor() {
  }

  ngOnInit() {
  }

}
