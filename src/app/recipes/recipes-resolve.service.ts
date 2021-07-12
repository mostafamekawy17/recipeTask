import { RecipeService } from "./recipe.service";
import { DataStorageService } from "./../shared/data-storage.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";

import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesResolveService implements Resolve<Recipe[]> {
  constructor(
    private _dataStorageService: DataStorageService,
    private _recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this._recipeService.getRecipes();
    if (recipes.length === 0) {
      return this._dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
