import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public Prime_number: number = 0;
  public result: string = "";
  public Carray: string = "MarveLLouS";
  public Count: number = 0;

  constructor(public Nobj: NumberService, public Sobj: StringService) { }

  ngOnInit() {

    this.Prime_number = this.Nobj.ChkPrime(4);

    if (this.Prime_number == 1) {
      this.result = "Its a prime number";
    } else {

      this.result = "Its not a Prime Number";
    }
    this.Sobj.CountCapital(this.Carray);
    this.Count = this.Sobj.Upper;
  }
}
