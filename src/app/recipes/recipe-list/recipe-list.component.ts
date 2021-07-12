import { Component, OnDestroy, OnInit } from '@angular/core';

import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription:Subscription;

  constructor(private _recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this._recipeService.recipeChanged
    .subscribe(
      (recipes:Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this._recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
