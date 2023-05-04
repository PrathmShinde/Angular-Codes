import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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

      emailAddress: new FormControl(),
      quantityFeild: new FormControl(),
      terms: new FormControl()

    });
  }

  postData() {

    console.log(this.checkoutForm.value.emailAddress)
    console.log(this.checkoutForm.value.quantityFeild)
    console.log(this.checkoutForm.value.terms)

    this.resetForm(); //  reset the form immediatly after submitting it.
  }

  resetForm() {
    this.checkoutForm.reset();  //  we'll use reset method to reset the entire form in one shot
  }

  ngOnInit(): void {

    // Provide the formControlName for which we want to read the values on change
    // The formControlName can be any input type o your form.

    this.checkoutForm.get('emailAddress')?.valueChanges.subscribe(data => {
      this.valueChangedTracked = data;
    })


    //capture the etire form whenever there is value change in any formControlName
    this.checkoutForm.valueChanges.subscribe(data => {
      console.log(data);
    })
  }

}
