import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private user: UserService, private router: Router ) {

  }

  logout(event: MouseEvent) {
    event.preventDefault();
    window.location.reload();
    return localStorage.removeItem("token");
  }

}