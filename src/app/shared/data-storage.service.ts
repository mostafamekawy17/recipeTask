import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, tap, take, exhaustMap } from "rxjs/operators";

import { Recipe } from './../recipes/recipe.model';

@Injectable({
    providedIn: 'root'
})

export class DataStorageService {
    constructor(private http: HttpClient, private _recipeService: RecipeService, private _authService: AuthService) { }

    storeRecipes() {
        const recipes = this._recipeService.getRecipes();
        this.http.put('https://ng-recipe-book-a6387-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe(
                response => {
                    console.log(response);
                }
            );
    }


    fetchRecipes() {

        return this.http.get<Recipe[]>('https://ng-recipe-book-a6387-default-rtdb.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipes => {
                    return {
                        ...recipes, ingredient: recipes.ingredient ? recipes.ingredient : []
                    };
                })
            }), tap(recipes => {
                this._recipeService.setRecipes(recipes)
            }));
    }

}