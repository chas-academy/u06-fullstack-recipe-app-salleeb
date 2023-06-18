import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-api',
  templateUrl: './recipe-api.component.html',
  styleUrls: ['./recipe-api.component.scss']
})
export class RecipeAPIComponent   {
  title = 'RecipeAPISearch';

  searchquery = "";

  mealType = "";

  health = "";

  allRecipes: any;

  breakfast = "Breakfast";
  lunch = "Lunch";
  dinner = "Dinner";
  desserts = "Desserts";
  snack = "Snack";
  teatime = "Teatime";
  brunch = "Brunch";

  vegetarian = "vegetarian";
  vegan = "vegan";
  dairy = "dairy-free";
  gluten = "gluten-free";
  treeNut = "tree-nut-free";
  peanut = "peanut-free";
  egg = "egg-free";

  constructor(private recipeService: RecipeService, private formBuilder: FormBuilder ){}

  getRecipes() {
    this.recipeService.getRecipes(this.searchquery, this.mealType, this.health).subscribe((result: any) => {
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

  getRecipeIdFromUri(uri: string | undefined): string {
    if (uri) {
      return uri.split('_').pop() || '';
    }
    return '';
  }
}