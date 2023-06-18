import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../auth/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent {

  message = "";

  alert:boolean = false;
  
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
  })

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  signup() {
    // console.log(this.register.value)
    if (this.register.value) {
      this.userService.registerUser(this.register.value).subscribe((res) => {
        console.log("res", res);
        this.message = "Success!";
        console.log(this.message);
        this.router.navigate(['/login']);
        this.message = "Success!";
        console.log(this.message);
      })
    }
    else {
      this.message = "Credentials don't match. Try again!";
      console.log(this.message);
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}