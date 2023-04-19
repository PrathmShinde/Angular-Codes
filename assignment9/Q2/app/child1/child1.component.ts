import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {


  public Prime_number: number = 0;
  public result: string = "";

  constructor(public Nobj: NumberService) { }

  ngOnInit() {

    this.Prime_number = this.Nobj.ChkPrime(5);

    if (this.Prime_number == 1) {

      this.result = "Its a prime number";

    } else {

      this.result = "Its not a Prime Number";
    }
  }

}
