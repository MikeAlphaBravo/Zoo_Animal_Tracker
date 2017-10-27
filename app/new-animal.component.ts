import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <label>Enter Animal Species:</label>
      <input type="text" [(ngModel)]="childSelectedAnimal.species">
      <br>
    <label>Enter Animal Name:</label>
      <input type="text" [(ngModel)]="childSelectedAnimal.name">
      <br>
    <label>Enter Animal Age:</label>
      <input type="number" [(ngModel)]="childSelectedAnimal.age">
      <br>
    <label>Enter Animal Diet:</label>
      <br>
    <select>

    </select>
      <br>
    <label>Enter Animal Location:</label>
      <br>
    <select>

    </select>
      <br>
    <label>Enter Animal's Number of Caretakers:</label>
      <input type="numer" [(ngModel)]="childSelectedAnimal.caretakers">
      <br>
    <label>Enter Animal's Sex:</label>
      <br>
    <select>

    </select>
      <br>
    <label>Enter Animal's Likes:</label>
      <input type="text" [(ngModel)]="childSelectedAnimal.likes">
      <br>
    <label>Enter Animal's Dislikes:</label>
      <input type="text" [(ngModel)]="childSelectedAnimal.dislikes">
      <br>
    <div>
      <button (click)="submitForm(newName.value, newAge.value, newCaretakers.value); newName.value=''; newAge.value=''; newCaretakers.value='';">Add</button>
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
