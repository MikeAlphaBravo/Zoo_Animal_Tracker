import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';


@Pipe({
  name: "young",
  pure: false
})


export class YoungPipe implements PipeTransform {
  transform(input: Animal[], desiredYoung) {
    let output: Animal[] = [];
    if (desiredYoung === "overTwoAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYoung === "underTwoAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredYoung === "ageSortAnimals") {
      output = input.sort(function(a, b) {
        return b.age - a.age;
      })
      return output;
    } else {
      return input;
    }
  }
}
