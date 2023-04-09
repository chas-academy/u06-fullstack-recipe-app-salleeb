import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';



// import { FormBuilder } from '@angular/forms';
// import { UserService } from './auth/user.service';
// import { SignupService } from './signup/signup.service';
import { RecipeService } from './recipe-api/recipe.service';

import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// export class AppComponent implements OnInit
export class AppComponent {


  // me = {
  //   id: 0,
  //   name: "",
  //   email: "evolkman@example.se",
  //   password: "password"
  // }

  // user2 = {
  //   id: 0,
  //   name: "",
  //   email: "",
  //   password: ""
  // }

  // constructor(private userService: UserService) {   // Om man skriver t.ex "private userService: UserService" och klickar på enter så importerar den klassen automatiskt (längst upp)
  //   // userService.loginUser(this.me)
  // }

  // login() {
  //   this.userService.loginUser(this.me)
  // }

  // getUser() {
  //   this.userService.getUser2().subscribe(res => {
  //     console.log(res[0]);
  //     this.user2 = res[0];
  //   })
  // }
}

  
  // form: FormGroup;
  
  // constructor(public fb: FormBuilder, private http: HttpClient) {
  //   this.form = this.fb.group({
  //     name: [''],
  //     email: [''],
  //     password: [''],
  //   });
  // }
  
  // ngOnInit() {}
  
  // submitForm() {
  //   var formData: any = new FormData();
  //   formData.append("name", this.form.get('name').value);
  //   formData.append("email", this.form.get('email').value);
  //   formData.append("password", this.form.get('password').value);
  //   this.http.post('http://localhost:4000/api/signup', formData).subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   )
  // }

  // today: number = Date.now();

  // form = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });
  
  // get f(){
  //   return this.form.controls;
  // }
  
  // signup(){
  //   this.userService
  //   .addHero(newUser)
  //   .subscribe(user => this.users.push(user));
  // }





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