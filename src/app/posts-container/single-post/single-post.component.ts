import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  @Input() postTitle: String = 'Default title!';

  constructor() {
  }

  ngOnInit() {
  }

}
