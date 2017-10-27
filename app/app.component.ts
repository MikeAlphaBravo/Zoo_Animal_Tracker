import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room Keg Tracker</h1>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <hr>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <hr>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>

  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Monkey', 'George', 5, 'Omnivore', 'Animal Kingdom Exhibit', 3, 'Male', 'Garbage cans full of bananas', 'Real Housewives of Atlanta'),
    new Animal('Giraff', 'Margaret', 4, 'Herbavore', 'Safari Ranch', 5, 'Female', 'Fresh Kale', 'Small children'),
    new Animal('Mongoose', 'Hillary', 1, 'Herbavore', 'Safari Ranch', 1, 'Female', 'Luke warm baths', 'Loud sounds'),
    new Animal('Wildabeast', 'Max', 10, 'Carnivore', 'Safari Ranch', 3, 'Male', 'Running rampant on the wild plains', 'Slum lords who run the outback'),
  ];

  selectedAnimal: Animal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
