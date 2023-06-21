import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe-api/recipe.service';

@Component({
  selector: 'app-recipe-apidetail',
  templateUrl: './recipe-apidetail.component.html',
  styleUrls: ['./recipe-apidetail.component.scss']
})

export class RecipeAPIDetailComponent {
  recipeId: string | null | undefined;

  allRecipes: any;

  recipe: any;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.fetchRecipeData();
  }

  fetchRecipeData() {
    if (!this.recipeId) {
      return;
    }

    this.recipeService.getRecipeById(this.recipeId).subscribe((result: any) => {
      this.allRecipes = result;

      let recipeDetails = Object.values(this.allRecipes).map((res: any) => res)
      this.recipe = recipeDetails[0];
    });
  }
}
