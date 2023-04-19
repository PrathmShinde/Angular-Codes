import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public Upper: number = 0;
  public i: number = 0;

  CountCapital(value: string) {

    for (this.i = 0; this.i < value.length; this.i++) {

      if (value[this.i] >= 'A' && value[this.i] <= 'Z') {

        this.Upper++;
      }
    }
  }
}
