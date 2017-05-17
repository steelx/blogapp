import {
  AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, OnInit, Renderer, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SinglePostComponent} from './single-post/single-post.component';
import {PostsService} from "../shared/posts/posts.service";

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit, AfterContentInit {
  @ViewChild('container', {read: ViewContainerRef}) container;

  posts$;
  constructor(private resolver: ComponentFactoryResolver,
              private postService: PostsService) { }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }

  ngAfterContentInit() {
    const singlePostFactory = this.resolver.resolveComponentFactory(SinglePostComponent);
    this.container.createComponent(singlePostFactory);
    this.container.createComponent(singlePostFactory);
    const singlePostRef = this.container.createComponent(singlePostFactory);
    singlePostRef.instance.postTitle = 'factory TITLE !!';
  }
}
