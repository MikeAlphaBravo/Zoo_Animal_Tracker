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
var AnimalListComponent = (function () {
    function AnimalListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.filterByEmpty = "fullAnimals";
    }
    AnimalListComponent.prototype.onChange = function (optionFromMenu) {
        this.filterByEmpty = optionFromMenu;
    };
    AnimalListComponent.prototype.editButtonHasBeenClicked = function (animalToEdit) {
        this.clickSender.emit(animalToEdit);
    };
    AnimalListComponent.prototype.priceColor = function (animal) {
        if (animal.price === 7) {
            return "bg-danger";
        }
        else if (animal.price === 6) {
            return "bg-warning";
        }
        else if (animal.price === 5) {
            return "bg-primary";
        }
        else if (animal.price === 4) {
            return "bg-info";
        }
        else {
            return "bg-success";
        }
    };
    return AnimalListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AnimalListComponent.prototype, "childAnimalList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalListComponent.prototype, "clickSender", void 0);
AnimalListComponent = __decorate([
    core_1.Component({
        selector: 'animal-list',
        template: "\n  <select (change)=\"onChange($event.target.value)\">\n      <option value=\"allAnimals\">All Animals</option>\n      <option value=\"emptyAnimals\">Empty Animals</option>\n      <option value=\"fullAnimals\" selected=\"selected\">Full Animals</option>\n      <option value=\"underTenAnimals\">Animals under 10 pours left</option>\n      <option value=\"abvAnimals\">By ABV</option>\n    </select>\n  <ol>\n    <li *ngFor=\"let currentAnimal of childAnimalList | empty:filterByEmpty\"><span [class]=\"priceColor(currentAnimal)\">{{currentAnimal.name}}</span>\n      <input *ngIf=\"currentAnimal.poured === true\" type=\"checkbox\" checked (click)=\"toggleDone(currentAnimal, false)\"/>\n      <input *ngIf=\"currentAnimal.poured === false\" type=\"checkbox\" (click)=\"toggleDone(currentAnimal, true)\"/>\n      <button class=\"btn btn-primary\" (click)=\"editButtonHasBeenClicked(currentAnimal)\">Edit!</button><br>\n      <ul>\n        <li>Price: {{currentAnimal.price}}</li>\n        <li>Brewery: {{currentAnimal.brand}}</li>\n        <li>ABV: {{currentAnimal.alcoholContent}}</li>\n        <li>Pours Left: {{currentAnimal.poursLeft}}</li>\n      </ul>\n    </li>\n  </ol>\n  "
    })
], AnimalListComponent);
exports.AnimalListComponent = AnimalListComponent;
//# sourceMappingURL=animal-list.component.js.map