import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JavaScript Evangelist';

  constructor(private af: AngularFireDatabase) {
    const users$: FirebaseListObservable<any> = this.af.list('/users');

    users$.subscribe(console.log);
  }
}
