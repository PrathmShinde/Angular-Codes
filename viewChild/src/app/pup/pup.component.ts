import { Component } from '@angular/core';

@Component({
  selector: 'app-pup',
  templateUrl: './pup.component.html',
  styleUrls: ['./pup.component.css']
})
export class PupComponent {

  whoAmI() {
      return "I am a pup component!"
  }
}
