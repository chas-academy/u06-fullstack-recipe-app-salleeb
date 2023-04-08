import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public userService: UserService
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }
  ngOnInit() {}
  onSubmit() {
    this.userService.this.configUrl(this.registerForm.value).subscribe(res => {
        console.log(res);
      },
      () => {
        this.registerForm.reset();
        this.router.navigate(['login']);
      }
    );
  }
}

// import { Component } from '@angular/core';
// import { UserService } from '../auth/user.service';

// import { User } from '../user';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.scss']
// })
// export class SignupComponent {
//   user = {
//     id: 0,
//     name: "",
//     email: "",
//     password: ""
//   }


//   constructor(private userService: UserService){
//   }

//   signup(user: User){
//     this.userService.signupUser(user).subscribe(res => {
//     console.log(res);
//     })
//   }

// }
