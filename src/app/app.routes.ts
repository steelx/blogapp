
import {Route} from "@angular/router";
import {PostsContainerComponent} from "./posts-container/posts-container.component";
import {PostPageComponent} from "./post-page/post-page.component";
export const ROUTES: Route[] = [
  {
    path: 'posts',
    children: [
      {path: '', component: PostsContainerComponent},
      {
        path: ':id',
        component: PostPageComponent
      }
    ]
  },

  { path: '', redirectTo: 'posts', pathMatch: 'full' }
];
