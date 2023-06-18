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
  user: any;
  message = "";

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {}

  loginForm = this.formBuilder.group({
    email: this.formBuilder.control(''),
    password: this.formBuilder.control(''),
  })

  login() {
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.value);
      this.router.navigate(['']);
      this.message = "Success!";
      console.log(this.message);
    }
    else {
      this.message = "Credentials don't match. Try again!";
      console.log(this.message);
    }
  }
}