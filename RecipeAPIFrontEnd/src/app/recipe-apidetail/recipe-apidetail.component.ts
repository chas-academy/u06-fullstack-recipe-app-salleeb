import { Component } from '@angular/core';
import { RecipeService } from '../recipe-api/recipe.service';

@Component({
  selector: 'app-recipe-apidetail',
  templateUrl: './recipe-apidetail.component.html',
  styleUrls: ['./recipe-apidetail.component.scss']
})
export class RecipeAPIDetailComponent {

  // searchquery = "";

  // foodId = ";"

  // constructor(private recipeService:RecipeService ) {}
  
  allRecipes: any;

  // getRecipes() {
  //   this.recipeService.getRecipes(this.searchquery).subscribe(result => {
  //     let recipes = result.hits.map((data: any) => {
  //       let recipe = data.recipe;
  //       recipe.selfref = data._links.self.href;
  //       return recipe;
  //     })
  //     console.log(result.hits[0]);
  //     console.log(recipes);

  //     this.allRecipes = recipes;
  //   })
  // }

  // getFoodId() {
  //   this.recipeService.getFoodId(this.foodId).subscribe(result => {
  //     let recipes = reslut.hits.map((data: any) => )
  //   })
  // }

}
