import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal-model';


@Pipe({
  name: "empty",
  pure: false
})


export class EmptyPipe implements PipeTransform {
  transform(input: Animal[], desiredEmpty) {
  //   let output: Animal[] = [];
  //   if(desiredEmpty === "emptyAnimals") {
  //     for (var i = 0; i < input.length; i++) {
  //       if (input[i].poured === true) {
  //         output.push(input[i]);
  //       }
  //     }
  //     return output;
  //   } else if (desiredEmpty === "fullAnimals") {
  //     for (var i = 0; i < input.length; i++) {
  //       if (input[i].poured === false) {
  //         output.push(input[i]);
  //       }
  //     }
  //     return output;
  //   } else if (desiredEmpty === "underTenAnimals") {
  //     for (var i = 0; i < input.length; i++) {
  //       if (input[i].poursLeft <= 10) {
  //         output.push(input[i]);
  //       }
  //     }
  //     return output;
  //   } else if (desiredEmpty === "abvAnimals") {
  //     output = input.sort(function(a, b) {
  //       return b.alcoholContent - a.alcoholContent;
  //     })
  //     return output;
  //   } else {
  //     return input;
  //   }
  }
}
