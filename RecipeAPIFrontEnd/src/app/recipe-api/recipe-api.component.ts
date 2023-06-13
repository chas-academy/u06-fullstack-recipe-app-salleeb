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

  recipeIds: string[] = [];

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


  getRecipeId() {
    this.allRecipes.forEach((recipe: { uri: any; }, index: any) => {
      let uri = recipe.uri;
      let id = uri.split('_').pop();
      console.log(id)
      this.recipeService.getRecipeById(id).subscribe((result: any) => {
          console.log(result);
        },
        (error) => {
          console.error('Error fetching recipe:', error);
        }
      );
    });
  }

  getRecipeIdFromUri(uri: string | undefined): string {
    if (uri) {
      return uri.split('_').pop() || '';
    }
    return '';
  }
}