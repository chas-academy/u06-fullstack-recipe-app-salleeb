import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
import { RecipeService } from './recipe-api/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  today: number = Date.now();

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

  constructor(private userService: UserService){
    //userService.loginUser(this.me)
  }

  login(){
    this.userService.loginUser(this.me);
  }

  // logout(){
  //   this.userService.logoutUser(this.me);
  // }

  getUser(){
    this.userService.getUser2().subscribe(res => {
      console.log(res[0]);
      this.user2 = res[0];
    })
  }
}





// import { Component } from '@angular/core';
// import { AuthService } from './auth.service';
// import { RecipeService } from './recipe-api/recipe.service';

// import {
//   FormControl,
//   FormGroup,
//   Validators,
//   FormBuilder,
// } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
  
//   registerForm: any = FormGroup;
//   submitted = false;

//   constructor(private formBuilder: FormBuilder) {}
//   //Add user form actions
//   get f() {
//     return this.registerForm.controls;
//   }
//   onSubmit() {
//     this.submitted = true;
//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//       return;
//     }
//     //True if all the fields are filled
//     if (this.submitted) {
//       alert('Great!!');
//     }
//     console.log(this.submitted);
//   }
//   ngOnInit() {
//     //Add User form validations
//     this.registerForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       username: ['', [Validators.required]],
//       password: ['', [Validators.required]],
//     });
//   }
// }