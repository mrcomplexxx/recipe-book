import { Component, OnInit } from '@angular/core';
import { RecipeBookService } from '../../services/recipe-book.service';
import { Recipe } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe?: Recipe;

  constructor(private recipeBook: RecipeBookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const recipes = this.recipeBook.recipes;
    const params = this.route.snapshot.paramMap;
    const recipeId = Number(params.get('id'));
    this.recipe = recipes.find(recipe => recipe.id === recipeId);
  }

}
