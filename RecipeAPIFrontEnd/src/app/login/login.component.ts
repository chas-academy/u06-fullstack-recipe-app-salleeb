import { Component } from '@angular/core';
import { UserService } from '../auth/user.service';
import { AppComponent } from '../app.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  me = {
    id: 0,
    name: "",
    email: "evolkman@example.com",
    password: "password",
  }

  user2 = {
    id: 0,
    name: "",
    email: "",
    password: ""
  }

  constructor(private userService: UserService) {   // Om man skriver t.ex "private userService: UserService" och klickar på enter så importerar den klassen automatiskt (längst upp)
    // userService.loginUser(this.me)
  }

  login(){
    this.userService.loginUser(this.me);
  }

  getUser(){
    this.userService.getUser2().subscribe(res => {
      console.log(res[0]);
      this.user2 = res[0];
    })
  }

}

  // user = {
  //   id: 0,
  //   name: "",
  //   email: "evolkman@example.com",
  //   password: "password",
  // }

  // user2 = {
  //   id: 0,
  //   name: "",
  //   email: "",
  //   password: ""
  // }

  // constructor(private userService: UserService){
  //   //userService.loginUser(this.me)
  // }

  // login(){
  //   this.userService.loginUser(this.user);
  // }

  // logout(){
  //   this.userService.logoutUser(this.me);
  // }

  // getUser(){
  //   this.userService.getUser2().subscribe(res => {
  //     console.log(res[0]);
  //     this.user2 = res[0];
  //   })
  // }
