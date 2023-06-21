import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    name: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
    password_confirmation: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
  })

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  signup() {
    if (this.register.value) {
      this.userService.registerUser(this.register.value).subscribe((res) => {
        this.message = "Success!";
        this.router.navigate(['/login']);
        this.message = "Success!";
      })
    }
    else {
      this.message = "Credentials don't match. Try again!";
      alert(this.message);
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