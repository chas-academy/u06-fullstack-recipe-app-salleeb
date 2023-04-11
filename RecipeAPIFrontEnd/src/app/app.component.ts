import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

//   loggedIn: boolean = false;

  constructor(private user: UserService, private router: Router ) {

  }

// ngOnInit(): void {
//   this.user.
// }

logout(event: MouseEvent) {
  event.preventDefault();
  this.router.navigate(['/login']);
  return localStorage.removeItem("token");
}

}