import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe, Ingredient } from '../../models';
import { RecipeBookService } from '../../services/recipe-book.service'

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  prepTime?: Event;
  name?: Event;
  source?: Event;
  instructions?: Event;
  ingredientError?: boolean;

  recipe: Recipe = {
    id: 0,
    name: '',
    source: '',
    ingredients: [],
    prepTime: 0,
    instructions: ''
  };

  submitRecipe (f: NgForm) {
    if (f.valid) {
      if (!this.recipe.ingredients.length) {
        this.ingredientError = true;
        return;
      }
      f.value.ingredients = this.recipe.ingredients;
      f.value.id = Recipe.nextIndex++;
      this.recipeBook.addRecipe(f.value);
      this.router.navigate(['/book']);
    };
  }

  ingredientChange (ingredients: Array<Ingredient>) {
    this.recipe.ingredients = ingredients;
    this.ingredientError = false;
  }

  constructor(private recipeBook: RecipeBookService, private router: Router) {}

  ngOnInit(): void { }

}
