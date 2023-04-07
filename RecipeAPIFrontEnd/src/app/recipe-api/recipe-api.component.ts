import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-api',
  templateUrl: './recipe-api.component.html',
  styleUrls: ['./recipe-api.component.scss']
})
export class RecipeAPIComponent {
  title = 'RecipeAPISearch';

  searchquery = "";

  constructor(private recipeService:RecipeService){

  }

  allRecipes: any;

  getRecipes() {
    this.recipeService.getRecipes(this.searchquery).subscribe(result => {
      let recipes = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.selfref = data._links.self.href;
        return recipe;
      })
      console.log(result.hits[0]);
      console.log(recipes);

      this.allRecipes = recipes;
    })
  }
}
