import { Component, Input } from '@angular/core';
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
  @Input() elementId!: string;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {}

  loginForm = this.formBuilder.group({
    email: this.formBuilder.control(''),
    password: this.formBuilder.control(''),
  })

  login() {
    let login = document.getElementById("login-link");
    let logout = document.getElementById("logout-link");

    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.value);
      this.router.navigate(['']);
      this.message = "Success!";
      console.log(this.message);

      if (login !== null) {
        login.style.display = "none";
        logout!.style.display = "block";
      }
    }
    else {
      this.message = "Credentials don't match. Try again!";
      console.log(this.message);
    }
  }
}