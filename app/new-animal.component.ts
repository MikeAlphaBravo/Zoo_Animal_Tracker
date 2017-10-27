import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal-model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <div>
      <label>Enter Animal Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Animal Brand:</label>
      <input #newBrand>
    </div>
    <div>
      <label>Enter Animal ABV:</label>
      <input #newABV>
    </div>
    <div>
      <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newABV.value); newName.value=''; newBrand.value=''; newABV.value='';">Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
