import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Test Name',
    //         'Test Describtion',
    //         'https://embed.widencdn.net/img/beef/tpfhvjvdnh/1120x630px/rancher-recipe-summertime-beef-meatloaf-horizontal.tif?keep=c&u=nvwl20',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20)
    //         ]),
    //     new Recipe(
    //         'Test Name',
    //         'Test Describtion',
    //         'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20)
    //         ]),
    //     new Recipe(
    //         'Pizza',
    //         'Combine flour, yeast, and salt in the bowl.',
    //         'https://www.seriouseats.com/thmb/IkCTkiIsj1_ZCkTzjb1gAj_CR5g=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2017__02__20170216-detroit-style-pizza-47-1500x1125-1-233d75e6021048b3bf3cf28bd59d310b.jpg',
    //         [
    //             new Ingredient('Bread Flour', 300),
    //             new Ingredient('Instant Yeast', 5)
    //         ])
    // ];

    private recipes: Recipe[] = [];

    constructor(private _shoppingListService: ShoppingListService) { }


    getRecipes() {
        return this.recipes.slice();
    }

    setRecipes(recipes:Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredient: Ingredient[]) {
        this._shoppingListService.addIngredients(ingredient)
    }

    addRecipe(recipe:Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe:Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());

    }

    deleteRecipe(index:number) {
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }
}