import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm!: FormGroup;

  constructor(public fb: FormBuilder) {

    this.contactForm = this.fb.group({
      fnameFeild: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      lnameFeild: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      emailFeild: ['', [Validators.required, Validators.email]],
      phoneFeild: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      cityFeild: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*$')]],
      stateFeild: ['', Validators.required],
      zipFeild: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
      commentsFeild: ['', [Validators.required, Validators.minLength(30)]],


    })
  }
  postData() {
    console.log(this.contactForm.value);

    this.contactForm.reset();
  }

}
