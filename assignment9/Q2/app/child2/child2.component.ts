import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(public Sobj: StringService) { }

  public Carray: string = "MaRveLLouS";
  public Count: number = 0;

  ngOnInit() {

    this.Sobj.CountCapital(this.Carray);
    this.Count = this.Sobj.Upper;
  }
}
