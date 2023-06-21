import { Component, Input } from '@angular/core';
import { UserService } from '../auth/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: any;
  message = '';
  @Input() elementId!: string;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  login() {
    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
  
      this.userService.loginUser(credentials)
        .subscribe(
          (res) => {
            localStorage.setItem("token", res.token);

            let login = document.getElementById('login-link');
            let logout = document.getElementById('logout-link');
  
            if (login) {
              login.style.display = 'none';
            }
  
            if (logout) {
              logout.style.display = 'block';
            }
  
            this.router.navigate(['/']);
          },
          (error) => {
            this.message = "Credentials don't match. Try again!";
            alert(this.message);
          }
        );
    } else {
      this.message = "Credentials don't match. Try again!";
    }
  }
}
