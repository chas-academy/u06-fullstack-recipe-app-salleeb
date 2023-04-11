import { Component } from '@angular/core';
import { UserService } from '../auth/user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // me = {
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

  // user = {
  //   id: 0,
  //   name: "",
  //   email: "",
  //   password: ""
  // }

  user:any
  message = "";

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {}

  loginForm = this.formBuilder.group({
    email: this.formBuilder.control(''),
    password: this.formBuilder.control(''),
  })

  login() {
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.value)
      // .subscribe(res => {
      //   this.user = res;
      //   console.log(this.user);
      //   sessionStorage.setItem('name', this.user.name); // Funkar ej, men syns i consolen!
      //   console.log(this.user.name);
      //   this.router.navigate(['']);
      // })
      this.router.navigate(['']);
      this.message = "Success!";
      console.log(this.message);
    }
    else {  // Funkar ej! Fixa!
      this.message = "Credentials don't match. Try again!";
      console.log(this.message);
    }
  }

  // login() {
  //   // console.log(this.register.value)
  //   this.userService.loginUser(this.login.value).subscribe((res) => {
  //     console.log("res", res)
  //   })
  // }

  // ngOnInit(): void {

  // }

  // login(){
  //   this.userService.loginUser(this.user);
  // }

  // getUser(){
  //   this.userService.getUser2().subscribe(res => {
  //     console.log(res[0]);
  //     this.user2 = res[0];
  //   })
  // }

  // signup() {
  //   // console.log(this.register.value)
  //   this.userService.registerUser(this.register.value).subscribe((res) => {
  //     console.log("res", res)
  //   })
  // }
}