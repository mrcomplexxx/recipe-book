import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient, INGREDIENTS, Measure } from '../../models';

@Component({
  selector: 'app-ingredient-selection',
  templateUrl: './ingredient-selection.component.html',
  styleUrls: ['./ingredient-selection.component.css']
})
export class IngredientSelectionComponent implements OnInit {
  @Input() ingredients!: Array<Ingredient>;
  @Output() ingredientChange = new EventEmitter<Array<Ingredient>>();
  measures: {[key: string]: string} = Measure;
  availableIngredients: string[] = INGREDIENTS;
  availableMeasures: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.availableMeasures = Object.keys(this.measures);
  }

  addIngredient(): void {
    this.ingredients.push({
      name: '',
      quantity: 0,
      measure: undefined
    })
    this.ingredientChange.emit(this.ingredients);
  }

}
