import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = {
    id: 0,
    name: "",
    email: "evolkman@example.com",
    password: "password",
  }

  // user2 = {
  //   id: 0,
  //   name: "",
  //   email: "",
  //   password: ""
  // }

  constructor(private userService: UserService){
    //userService.loginUser(this.me)
  }

  login(){
    this.userService.loginUser(this.user);
  }

  // logout(){
  //   this.userService.logoutUser(this.me);
  // }

  // getUser(){
  //   this.userService.getUser2().subscribe(res => {
  //     console.log(res[0]);
  //     this.user2 = res[0];
  //   })
  // }
}
