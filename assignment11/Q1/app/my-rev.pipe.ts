import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {

    var str = value;
    var strLen = str.length;
    var RevStr = " ";

    for (var i = strLen - 1; i >= 0; i--) {

      RevStr = RevStr + str[i];

    }
    return RevStr;
  }
}