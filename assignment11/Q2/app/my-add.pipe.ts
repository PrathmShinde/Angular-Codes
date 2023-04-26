import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {

    let num = value;
    let Addition = 0;
    let getNum = args[0];

    Addition = num + getNum;

    return Addition;
  }
}
