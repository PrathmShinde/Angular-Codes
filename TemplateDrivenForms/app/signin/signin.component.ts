import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  loginUser(signInForm: NgForm) {

    console.log(signInForm);
    console.log(signInForm.value.emailAddress);
    console.log(signInForm.value.passwordFeild);
    console.log(signInForm.value.termFeild
    );

  }
}
