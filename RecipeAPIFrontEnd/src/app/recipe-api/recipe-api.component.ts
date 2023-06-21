import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RecipeService } from './recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-api',
  templateUrl: './recipe-api.component.html',
  styleUrls: ['./recipe-api.component.scss'],
  template:
    `<div class="flex w-full flex-wrap">
      <a class="h-auto max-w-full w-60" *ngFor="let recipe of allRecipes; let i = index"
      [routerLink]="['/recipe/', getRecipeIdFromUri(recipe.uri)]" routerLinkActive="active">
        <img class="rounded-lg" [src]="recipe.image" [alt]="recipe.label">
        <h2>{{ recipe.label }}</h2>
      </a>
    </div>`
})
export class RecipeAPIComponent   {
  title = 'RecipeAPISearch';

  defaultRecipes = "midsummer";

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

  constructor(private recipeService: RecipeService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute ){}

  ngOnInit() {
    this.recipeService.getRecipes(this.defaultRecipes, "", "").subscribe((result: any) => {
      let recipes = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.selfref = data._links.self.href;
        return recipe;
      })
      this.allRecipes = recipes;
    })
  }

  getRecipes() {
    this.recipeService.getRecipes(this.searchquery, this.mealType, this.health).subscribe((result: any) => {
      let recipes = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.selfref = data._links.self.href;
        return recipe;
      })
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