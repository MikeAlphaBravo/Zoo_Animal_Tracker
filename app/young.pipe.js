"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var YoungPipe = (function () {
    function YoungPipe() {
    }
    YoungPipe.prototype.transform = function (input, desiredYoung) {
        var output = [];
        if (desiredYoung === "overTwoAnimals") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].age > 2) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (desiredYoung === "underTwoAnimals") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].age <= 2) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (desiredYoung === "ageSortAnimals") {
            output = input.sort(function (a, b) {
                return b.age - a.age;
            });
            return output;
        }
        else {
            return input;
        }
    };
    return YoungPipe;
}());
YoungPipe = __decorate([
    core_1.Pipe({
        name: "young",
        pure: false
    })
], YoungPipe);
exports.YoungPipe = YoungPipe;
//# sourceMappingURL=young.pipe.js.map