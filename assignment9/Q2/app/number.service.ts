import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public i: number = 0;
  public Count: number = 0;
  public result: number = 0;

  ChkPrime(num: number): number {

    for (this.i = 1; this.i <= num; this.i++) {

      if (num % this.i == 0) {
        this.Count++;
      }
    }
    if (this.Count == 2) {
      this.result = 1;
    } else {
      this.result = 0;
    }
    return this.result;
  }
}
