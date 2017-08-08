import { Component } from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public isLoggedIn;
  constructor(private authService: AuthService, private router: Router) {
    authService.isAuthenticated()
      .subscribe(
        success => this.isLoggedIn = success
      );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
