import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {

    let num = value;
    let Multiplication = 0;

    let getNum = args[0];

    Multiplication = num * getNum;

    return Multiplication;
  }
}
