import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <label>Enter Animal Species:</label>
      <input #newSpecies>
      <br>
    <label>Enter Animal Name:</label>
      <input #newName>
      <br>
    <label>Enter Animal Age:</label>
      <input #newAge>
      <br>
    <label>Enter Animal Diet:</label>
      <br>
    <select>
      <option value="Herbavore">Herbavore</option>
      <option value="Carnivore">Carnivore</option>
      <option value="Omnivore">Omnivore</option>
    </select>
      <br>
    <label>Enter Animal Location:</label>
      <br>
    <select>
      <option value="Safari Ranch">Safari Ranch</option>
      <option value="Animal Kingdom Exhibit">Animal Kingdom Exhibit</option>
    </select>
      <br>
    <label>Enter Animal's Number of Caretakers:</label>
      <input #newCaretakers>
      <br>
    <label>Enter Animal's Sex:</label>
      <br>
    <select>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
      <br>
    <label>Enter Animal's Likes:</label>
      <input #newLikes>
      <br>
    <label>Enter Animal's Dislikes:</label>
      <input #newDislikes>
      <br>
    <div>
      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
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
