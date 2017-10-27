import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>{{childSelectedAnimal.name}}</h3>
    <h3>Edit Animal</h3>
    <div>
      <label>Enter New Animal Name:</label>
      <input type="text" [(ngModel)]="childSelectedAnimal.name">
    </div>
    <div>
      <label>Enter New Animal Age:</label>
      <input type="number" [(ngModel)]="childSelectedAnimal.age">
    </div>
    <div>
      <label>Enter New Animal Caretakers:</label>
      <input type="number" [(ngModel)]="childSelectedAnimal.caretakers">
    </div>
    <button class="btn btn-primary" (click)="doneButtonClicked()">Done</button>
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
