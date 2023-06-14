import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from './recipe.service';
import { DishType } from '../enum';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-recipe-api',
  templateUrl: './recipe-api.component.html',
  styleUrls: ['./recipe-api.component.scss']
})
export class RecipeAPIComponent   {
  title = 'RecipeAPISearch';

  searchquery = "";

  allRecipes: any;

  constructor(private recipeService: RecipeService, private formBuilder: FormBuilder ){}

  getRecipes() {
    this.recipeService.getRecipes(this.searchquery).subscribe((result: any) => {
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