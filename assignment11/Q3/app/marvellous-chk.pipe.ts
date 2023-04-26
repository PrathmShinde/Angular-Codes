import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {

    let num = value;
    let Cnt = 0;
    let i = 0;
    let str = "";

    //To check whether number is prime or not
    if (args[0] == "Prime") {

      for (i = 0; i <= num; i++) {

        if (num % i == 0) {
          Cnt++;
        }
      }
      if (Cnt == 2) {
        str = "It is Prime Number";
      } else {
        str = "Its not a Prime Number";
      }
    }

    //To check whether number is Even or not
    if (args[0] == "Even") {

      if (num % 2 == 0) {
        str = "It is Even";
      } else {
        str = "It is not Even";
      }
    }

    //To check whether number is Odd or not
    if (args[0] == "Odd") {

      if (num % 2 != 0) {
        str = "It is Odd number";
      } else {
        str = "It is Not Odd number";
      }
    }

    // To check whether number is perfect or not

    if (args[0] == "Perfect") {

      let i, rem, sum = 0;

      for (i = 0; i < num; i++) {

        rem = num % i;

        if (rem == 0) {
          sum += i;
        }
        if (num == sum) {
          str = "It is a Perfect number";
        } else {
          str = "It is not a Perfect number";
        }
      }
    }
    return str;
  }
}
