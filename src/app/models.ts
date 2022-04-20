export enum Measure {
  mg = 'Miligram',
  g = 'Gram',
  kg = 'Kilogram',
  oz = 'Ounce',
  ml = 'Mililiter',
  l = 'Liter',
  pcs = 'Piece'
}

export interface Ingredient {
  name: string,
  quantity: number,
  measure?: Measure
}

export const INGREDIENTS = [
  'Flour',
  'Milk',
  'Oil',
  'Salt',
  'Sugar',
  'Eggs',
  'Tomatoes',
  'Peppers',
  'Cheese',
  'Potatoes',
  'Meat'
];

export class Recipe {
  static nextIndex:number = 0;
  id: number = Recipe.nextIndex;
  name: string = '';
  source: string = '';
  ingredients: Array<Ingredient> = [];
  prepTime: number = 0;
  instructions: string = '';

  constructor (name: string, source: string, ingredients: Array<Ingredient>, prepTime: number, instructions: string) {
    this.id = Recipe.nextIndex++;
    this.name = name;
    this.source = source;
    this.ingredients = ingredients;
    this.prepTime = prepTime;
    this.instructions = instructions;
  }
}
