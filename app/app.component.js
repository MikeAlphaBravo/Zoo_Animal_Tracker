"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("./animal.model");
var AppComponent = (function () {
    function AppComponent() {
        this.masterAnimalList = [
            new animal_model_1.Animal('Monkey', 'George', 5, 'Omnivore', 'Animal Kingdom Exhibit', 3, 'Male', 'Garbage cans full of bananas', 'Real Housewives of Atlanta'),
            new animal_model_1.Animal('Giraff', 'Margaret', 4, 'Herbavore', 'Safari Ranch', 5, 'Female', 'Fresh Kale', 'Small children'),
            new animal_model_1.Animal('Mongoose', 'Hillary', 1, 'Herbavore', 'Safari Ranch', 1, 'Female', 'Luke warm baths', 'Loud sounds'),
            new animal_model_1.Animal('Wildabeast', 'Max', 10, 'Carnivore', 'Safari Ranch', 3, 'Male', 'Running rampant on the wild plains', 'Slum lords who run the outback'),
        ];
        this.selectedAnimal = null;
    }
    AppComponent.prototype.editAnimal = function (clickedAnimal) {
        this.selectedAnimal = clickedAnimal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedAnimal = null;
    };
    AppComponent.prototype.addAnimal = function (newAnimalFromChild) {
        this.masterAnimalList.push(newAnimalFromChild);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container\">\n    <h1>Tap Room Keg Tracker</h1>\n    <animal-list [childAnimalList]=\"masterAnimalList\" (clickSender)=\"editAnimal($event)\"></animal-list>\n    <hr>\n    <edit-animal [childSelectedAnimal]=\"selectedAnimal\" (doneButtonClickedSender)=\"finishedEditing()\"></edit-animal>\n    <hr>\n    <new-animal (newAnimalSender)=\"addAnimal($event)\"></new-animal>\n  </div>\n\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map