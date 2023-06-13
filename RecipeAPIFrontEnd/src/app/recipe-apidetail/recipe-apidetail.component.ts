import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe-api/recipe.service';
import { RecipeAPIComponent } from '../recipe-api/recipe-api.component';

@Component({
  selector: 'app-recipe-apidetail',
  templateUrl: './recipe-apidetail.component.html',
  styleUrls: ['./recipe-apidetail.component.scss']
})

export class RecipeAPIDetailComponent {

  constructor(private recipeService:RecipeService, private activatedRoute: ActivatedRoute ) {}

}
