import { Component, OnInit } from '@angular/core';
import { RecipeBookService } from '../../services/recipe-book.service';
import { Recipe } from '../../models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  recipes: Array<Recipe> = [];

  constructor(private recipeBook: RecipeBookService) {
    this.recipes = recipeBook.recipes;
  }

  deleteRecipe(id: number) {
    const del: Boolean = confirm('Are you sure you want to delete this recipe ?');
    if (del) this.recipeBook.deleteRecipe(id);
  }

  ngOnInit(): void {
  }
}
