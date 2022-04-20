import { Injectable } from '@angular/core';
import { Recipe } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {
  recipes: Array<Recipe> = [];

  constructor() { }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  deleteRecipe(id: number) {
    const index = this.recipes.findIndex(r => r.id === id);
    if (index >= 0) this.recipes.splice(index, 1);
  }
}
