import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from './models';

@Pipe({
  name: 'minutesDisplay'
})
export class MinutesDisplayPripe implements PipeTransform {
    transform(value: number): string {
      const hours = Math.floor(value / 60);
      const minutes = value % 60;
      let result = `${minutes.toString()} m`;
      if (!!hours) {
        result = `${hours.toString()} h ${minutes.toString().padStart(2, '0')} m`;
      }
      return result;
    }
}

@Pipe({
  name: 'arrayLength'
})
export class ArrayLengthPipe implements PipeTransform {
  transform(array: Array<any>): number {
    return array.length;
  }
}

@Pipe({
  name: 'ingredientList'
})
export class IngredientPipe implements PipeTransform {
  transform(ingredients: Array<Ingredient>): string {
    const firstIngredients = ingredients.map(i => i.name).splice(0,3).join(', ');
    return `${firstIngredients}${ingredients.length > 3 ? '...' : ''}`;
  }
}

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(text: string): string {
    return text.length >= 50 ? `${text.substring(0,45)}...` : text;
  }
}
