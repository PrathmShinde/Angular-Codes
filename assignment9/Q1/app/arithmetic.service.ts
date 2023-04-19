import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }


  Add(num1: number, num2: number): any {

    return num1 + num2;
  }

  Sub(num1: number, num2: number): any {

    return num1 + num2;
  }
}
