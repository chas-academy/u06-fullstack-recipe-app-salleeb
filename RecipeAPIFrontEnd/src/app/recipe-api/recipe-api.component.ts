import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-api',
  templateUrl: './recipe-api.component.html',
  styleUrls: ['./recipe-api.component.scss']
})
export class RecipeAPIComponent {
  title = 'RecipeAPISearch';

  searchquery = "";

  foodId = "";

  dishType = "";
  
  // optionFilters?: boolean;

  // dishType = ['starter', 'main course', 'desserts'];
  // filterOptions = this.dishType;
  // testFiler = "";

  allRecipes: any;

  constructor(private recipeService: RecipeService, private formBuilder: FormBuilder, ){

  }

  // getRecipes() {
  //   this.recipeService.getRecipes(this.searchquery).subscribe(result => {
  //     let recipes = result.hits.map((data: any) => {
  //       let recipe = data.recipe;
  //       recipe.selfref = data._links.self.href;
  //       return recipe;
  //     }).filter(result => {
  //       this.filterOptions
  //       ? result.allRecipes.includes(this.filterOptions)
  //       : result;
  //     })
  //     console.log(result.hits[0]);
  //     console.log(recipes);

  //     this.allRecipes = recipes;
  //   })
  // }


  getRecipes() { // Originala!
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
    // if (value = true) {
    //   this.recipeService.getRecipes(this.optionFilters.value);
    // }
  }



  // getFoodId() {
  //   let url = '/item/:id/edit'
  //   url.split('/').pop();
  //   url = this.foodId;
  //   console.log(url);
  // }

  // getFoodId() {
  //   this.recipeService.getFoodId(this.foodId).subscribe(result => {
  //     let id = result.hits.map((data: string) => {
  //       let recipe = data.recipe;
  //       recipe.uri = data.uri;
  //     })
  //     console.log(result.hits)
  //   })
  // }

  // getFoodId() {
  //   return this.http
  //       .get(`${someURL}`)
  //       .map(result=>result.recipe);
  //       console.log(result);
  // }

  // this.userService.registerUser(this.register.value).subscribe((res) => {
  //   console.log("res", res)
  // })

  // getFoodId() {
  //   this.recipeService.getFoodId(this.foodId).subscribe(result => {
  //     let recipes = result.hits.map((data: any) => {
  //       recipe.selfref = data._links.self.href;
  //       return recipe;
  //     })
  //     console.log(result.hits);
  //   })
  //   return this.allRecipes = recipes;
  // }

  // getFoodId() {
  //   this.recipeService.getFoodId(this.foodId).subscribe(res => {
  //     this.allRecipes=res;
  //   })
  // }

  // getId(foodId: string) {
	// 	this.router.navigate(['id', foodId]);
	// }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((params) => {
  //     const id = params.get('id');
  //   });
  // }

  // getFoodId() {
  //   this.recipeService.getFoodId(this.id).subscribe
  // }

  // id = [''];

  // viewPosts(id: any){
  //   console.log(id);
  //  this.recipeService.getPosts(id).subscribe((result) => {
  //       console.log(result);
  //   });  
  // }

  // id = ['']

  // ngOnInit() {
  //   let recipeId = new HttpParams();
  //   recipeId = recipeId.append('foodId', this.activatedRoute.join(', '));
  //   this.http.get(URL, { recipeId: recipeId });
  // }

  // foodId;
  // recipeId;

  // ngOnIt(); void {
  //   // this.recipeId = this.activatedRoute.snapshot.paramMap.get('foodId');
  //   // this.id = this.service.id.find(x => x.foodId == this.id);

  //   this.activatedRoute.paramMap.subscribe((param) => {
  //     this.recipeId = param.get('id');
  //     this foodId = this.service.id.find(x => x.id == this.recipeId);
  //   })

  // }

  // dishTypeFilter() {
  //   this.recipeService.dishTypeFilter(this.dishType).subscribe(data => {
  //     let filter = data.map((data) => {
  //       let type = data.type;
  //       return type;
  //     })
  //     this.allRecipes = filter;
  //   })
  // }

  // notRepeat() {
  //   let uniqueChars = this.dishType.filter((element, index) => {
  //     return this.dishType.indexOf(element) === index;
  //   });
  //   console.log(uniqueChars);
    
  //   // let dishTypeOption = [...new Set(this.dishType)];
  //   // dishTypeOption = this.dishType
  //   // return this.dishType;
  // }
}
