import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal-model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="emptyAnimals">Empty Animals</option>
      <option value="fullAnimals" selected="selected">Full Animals</option>
      <option value="underTenAnimals">Animals under 10 pours left</option>
      <option value="abvAnimals">By ABV</option>
    </select>
  <ol>
    <li *ngFor="let currentAnimal of childAnimalList | empty:filterByEmpty"><span [class]="priceColor(currentAnimal)">{{currentAnimal.name}}</span>
      <input *ngIf="currentAnimal.poured === true" type="checkbox" checked (click)="toggleDone(currentAnimal, false)"/>
      <input *ngIf="currentAnimal.poured === false" type="checkbox" (click)="toggleDone(currentAnimal, true)"/>
      <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button><br>
      <ul>
        <li>Price: {{currentAnimal.price}}</li>
        <li>Brewery: {{currentAnimal.brand}}</li>
        <li>ABV: {{currentAnimal.alcoholContent}}</li>
        <li>Pours Left: {{currentAnimal.poursLeft}}</li>
      </ul>
    </li>
  </ol>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByEmpty: string = "fullAnimals";

  onChange(optionFromMenu) {
    this.filterByEmpty = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  priceColor(animal){
    if (animal.price === 7){
      return "bg-danger";
    } else if (animal.price === 6) {
      return  "bg-warning";
    } else if (animal.price === 5) {
      return  "bg-primary";
    } else if (animal.price === 4) {
      return  "bg-info";
    } else {
      return "bg-success";
    }
  }
}
