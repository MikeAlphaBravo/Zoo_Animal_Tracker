import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';


@Pipe({
  name: "young",
  pure: false
})


export class YoungPipe implements PipeTransform {
  transform(input: Animal[], desiredYoung) {
    let output: Animal[] = [];
    if(desiredYoung === "youngAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].aged === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYoung === "oldAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].aged === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYoung === "underTwoAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].yearsLeft <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYoung === "abvAnimals") {
      output = input.sort(function(a, b) {
        return b.age - a.age;
      })
      return output;
    } else {
      return input;
    }
  }
}
