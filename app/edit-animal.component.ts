import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>{{childSelectedAnimal.species}}</h3>
    <h3>Edit Animal</h3>
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
    <hr>
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter;

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
