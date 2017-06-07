import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SinglePostComponent } from './posts-container/single-post/single-post.component';
import {PostsService} from './shared/posts/posts.service';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {environment} from '../environments/environment';
import {PostPageComponent} from "./post-page/post-page.component";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsContainerComponent,
    NavigationComponent,
    SinglePostComponent,
    PostPageComponent,
    UserProfileComponent
  ],
  entryComponents: [SinglePostComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
