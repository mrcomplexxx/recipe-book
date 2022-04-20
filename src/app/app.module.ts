import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BookComponent } from './components/book/book.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { IngredientSelectionComponent } from './components/ingredient-selection/ingredient-selection.component';

import { MinutesDisplayPripe, IngredientPipe, ArrayLengthPipe, TruncatePipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    RecipeComponent,
    AddRecipeComponent,
    IngredientSelectionComponent,
    MinutesDisplayPripe,
    ArrayLengthPipe,
    IngredientPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
