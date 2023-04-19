import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public addition: any = 0;
  public substraction: any = 0;

  constructor(public Aobj: ArithmeticService) { }

  ngOnInit() {

    this.addition = this.Aobj.Add(10, 11);
    this.substraction = this.Aobj.Add(5, 3);

  }
}
