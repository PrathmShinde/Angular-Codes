import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm!: FormGroup;
  valueChangedTracked = "";

  constructor(public fb: FormBuilder) {

    this.checkoutForm = this.fb.group({

      emailAddress: ['', [Validators.required,
      Validators.email,
      Validators.minLength(5)]],
      quantityFeild: ['', Validators.required],
      terms: ['', Validators.requiredTrue]

    });
  }

  postData() {

    console.log(this.checkoutForm)
    // console.log(this.checkoutForm.value.emailAddress)
    // console.log(this.checkoutForm.value.quantityFeild)
    // console.log(this.checkoutForm.value.terms)

  }

  ngOnInit(): void {

    //learning to use statusChange on FormControl
    //on a single formControl

    this.checkoutForm.get('emailAddress')?.statusChanges.subscribe(data => {
      console.log(data);
    });

    //dynamically we can capture the state of validation of the "entire" form
    this.checkoutForm.statusChanges.subscribe(fromState => {
      console.log(fromState);
    })
  }
}