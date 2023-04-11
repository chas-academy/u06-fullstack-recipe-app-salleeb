import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  appid = "72ad4883"
  appkey = "76cb1380c1d8133bd184f8e17eb9552f"
  urlConfig = "https://api.edamam.com/api/recipes/v2"
  type = "public"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http:HttpClient) { }

  getRecipes(q:string) {
    let searchquery = this.urlConfig + "?type=" + this.type + "&q=" + q + "&app_id=" + this.appid + "&app_key=" + this.appkey
    // let optionFilters = new HttpParams.get()
    return this.http.get<any>(searchquery, this.httpOptions);
  }

  // getFoodId(id: string) {
  //   let foodId = this.urlConfig + "/" + id
  //   // let url = '/item/:id/edit'
  //   // url.split('/').pop();
  //   // url = foodId;
  //   // console.log(url);
  //   return this.http.get(foodId, this.httpOptions);
  //   // return this.http.get(this.apiUri + id);
  // }


  // getFoodId(i: string) {
  //   let foodId = this.apiUri + "_" + i;
  //   return this.http.get<any>(foodId, this.httpOptions);
  // }

  // getFoodId(i: string) {
  //   let id = this.apiUri + "" + i
  //   return this.http.get<any>(i);
  // }

  // getFoodId(i:string) {
  //   let id = this.url + i;
  //   return this.http.get(id);
  // }

  // getPosts(id:any):Observable<any>{
  //   const api = `http://localhost:4200/${id}`;
  //   return this.http.get(api);
  // }

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
