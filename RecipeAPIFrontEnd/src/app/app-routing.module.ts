import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeAPIComponent } from './recipe-api/recipe-api.component';
import { RecipeAPIDetailComponent } from './recipe-apidetail/recipe-apidetail.component';

const routes: Routes = [
  { path: '', component: RecipeAPIComponent },
    // redirectTo: '/products',
    // pathMatch: 'full'
  { path: 'recipes/:id', component: RecipeAPIDetailComponent  },
  { path: 'lists/:id', component:  ListsComponent },
  { path: 'login', component: AppComponent  },
    // canActivate: [ExampleGuard],
  { path: 'login/:id/logout', component: AppComponent },
  { path: '**', component: NotFoundComponent, data: { title : 'Oops' }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
