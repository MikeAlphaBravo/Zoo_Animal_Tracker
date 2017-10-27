"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("./animal.model");
var EditAnimalComponent = (function () {
    function EditAnimalComponent() {
        this.doneButtonClickedSender = new core_1.EventEmitter;
    }
    EditAnimalComponent.prototype.doneButtonClicked = function () {
        this.doneButtonClickedSender.emit();
    };
    return EditAnimalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", animal_model_1.Animal)
], EditAnimalComponent.prototype, "childSelectedAnimal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditAnimalComponent.prototype, "doneButtonClickedSender", void 0);
EditAnimalComponent = __decorate([
    core_1.Component({
        selector: 'edit-animal',
        template: "\n  <div *ngIf=\"childSelectedAnimal\">\n    <h3>{{childSelectedAnimal.species}}</h3>\n    <h3>Edit Animal</h3>\n    <label>Enter Animal Species:</label>\n    <input type=\"text\" [(ngModel)]=\"childSelectedAnimal.species\">\n    <br>\n    <label>Enter Animal Name:</label>\n    <input type=\"text\" [(ngModel)]=\"childSelectedAnimal.name\">\n    <br>\n    <label>Enter Animal Age:</label>\n    <input type=\"number\" [(ngModel)]=\"childSelectedAnimal.age\">\n    <br>\n    <label>Enter Animal Diet:</label>\n    <br>\n    <select>\n\n    </select>\n    <br>\n    <label>Enter Animal Location:</label>\n    <br>\n    <select>\n\n    </select>\n    <br>\n    <label>Enter Animal's Number of Caretakers:</label>\n    <input type=\"numer\" [(ngModel)]=\"childSelectedAnimal.caretakers\">\n    <br>\n    <label>Enter Animal's Sex:</label>\n    <br>\n    <select>\n\n    </select>\n    <br>\n    <label>Enter Animal's Likes:</label>\n    <input type=\"text\" [(ngModel)]=\"childSelectedAnimal.likes\">\n    <br>\n    <label>Enter Animal's Dislikes:</label>\n    <input type=\"text\" [(ngModel)]=\"childSelectedAnimal.dislikes\">\n    <br>\n    <hr>\n    <button (click)=\"doneButtonClicked()\">Done</button>\n  </div>\n  "
    })
], EditAnimalComponent);
exports.EditAnimalComponent = EditAnimalComponent;
//# sourceMappingURL=edit-animal.component.js.map