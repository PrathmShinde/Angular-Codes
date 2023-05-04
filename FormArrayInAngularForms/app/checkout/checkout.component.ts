import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm!: FormGroup;

  constructor(public fb: FormBuilder) {

    this.checkoutForm = this.fb.group({

      emailAddress: ['', [Validators.required,
      Validators.email,
      Validators.minLength(5)]],                  //Multiple validators
      quantityFeild: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
      hobbies: this.fb.array([

      ])
    });
  }
  postData() {
    console.log(this.checkoutForm)
  }

  ngOnInit(): void {

  }

  get hobbyControls() {
    return (<FormArray>this.checkoutForm.get('hobbies')).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.checkoutForm.get('hobbies')).push(control);
  }
}