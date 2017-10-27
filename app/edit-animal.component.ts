import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal-model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>{{childSelectedAnimal.name}}</h3>
    <p>Animal Poured? {{childSelectedAnimal.poured}}</p>
    <h3>Edit Animal</h3>
    <label>Enter Animal Name:</label>
    <input type="text" [(ngModel)]="childSelectedAnimal.name">
    <br>
    <label>Enter Animal Brewery:</label>
    <input type="text" [(ngModel)]="childSelectedAnimal.brand">
    <br>
    <label>Enter Animal ABV:</label>
    <input type="text" [(ngModel)]="childSelectedAnimal.alcoholContent">
    <br>
    <label>Enter Animal Price Bracket (1-3):</label>
    <br>
    <input type="radio" [(ngModel)]="childSelectedAnimal.price" [value]="3">3 (Low Cost)<br>
    <input type="radio" [(ngModel)]="childSelectedAnimal.price" [value]="4">4 (Medium Cost)<br>
    <input type="radio" [(ngModel)]="childSelectedAnimal.price" [value]="5">5 (Medium Cost)<br>
    <input type="radio" [(ngModel)]="childSelectedAnimal.price" [value]="6">6 (High Cost)<br>
    <input type="radio" [(ngModel)]="childSelectedAnimal.price" [value]="7">7 (High Cost)
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
