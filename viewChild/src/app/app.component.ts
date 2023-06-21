import { Component, ViewChild } from '@angular/core';
import { SharkDirective } from './shark.directive';
import { PupComponent } from './pup/pup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewChild';

  //Using ViewChild with Directives
  // extraCreature !: string;

  // @ViewChild(SharkDirective)
  //  set appshark(directive : SharkDirective) {
  //   this.extraCreature = directive.creature
  //  }

  //  ngAfterViewInit(){
  //   alert(this.extraCreature);

  //  }

  //Using ViewChild with Child Components
  @ViewChild(PupComponent) pup!: PupComponent;

  ngAfterViewInit(){
    alert(this.pup.whoAmI());
  }
}
