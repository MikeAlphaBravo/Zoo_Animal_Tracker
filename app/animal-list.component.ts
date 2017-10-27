import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="underTwoAnimals">Animals under 2 years old</option>
      <option value="overTwoAnimals">Animals over 2 years old</option>
    </select>
    <br><br>
  <ol>
    <li *ngFor="let currentAnimal of childAnimalList | young:filterByYoung"><span>{{currentAnimal.name}}</span>
      <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button><br>
      <ul>
        <li>Species: {{currentAnimal.species}}</li>
        <li>Name: {{currentAnimal.name}}</li>
        <li>Age: {{currentAnimal.age}}</li>
        <li>Diet: {{currentAnimal.diet}}</li>
        <li>Location: {{currentAnimal.location}}</li>
        <li>Caretakers: {{currentAnimal.caretakers}}</li>
        <li>Sex: {{currentAnimal.sex}}</li>
        <li>Likes: {{currentAnimal.likes}}</li>
        <li>Dislikes: {{currentAnimal.dislikes}}</li>
      </ul><br>
    </li>
  </ol>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByYoung: string = "oldAnimals";

  onChange(optionFromMenu) {
    this.filterByYoung = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
