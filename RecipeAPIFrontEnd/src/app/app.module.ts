import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RecipeAPIComponent } from './recipe-api/recipe-api.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeAPIDetailComponent } from './recipe-apidetail/recipe-apidetail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListsComponent } from './lists/lists.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeAPIComponent,
    RecipeAPIDetailComponent,
    NotFoundComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule // Tillagd!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { RecipeAPIComponent } from './recipe-api/recipe-api.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     AppComponent,
//     RecipeAPIComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     FormsModule,
//     ReactiveFormsModule // Tillagd!
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
